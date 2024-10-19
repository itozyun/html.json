/**
 * @see https://github.com/dominictarr/through
 * 
 *  a stream that does nothing but re-emit the input.
 *  useful for aggregating a series of changing but not ending streams into one stream)
 */
goog.provide( 'Through' )

/** @private */
var stream = require('node:stream')


Through = class extends stream.Stream {
  /**
   * create a readable writable stream.
   * 
   * @param {!function(this:Through, (Buffer | string | number | boolean | null))} write
   * @param {!function(this:Through, (Buffer | string | number | boolean | null)=)} end
   */
  constructor(write, end) {
    super();

    this._writeHandler = write;
    this._endHandler = end;

    this.ended     = false;
    this._ended    = false;
    this.paused    = false;
    this.destroyed = false;

    this.readable = this.writable = true;
    
    /** @const {boolean} */ this.autoDestroy = true;

    /** @const {!Array.<Buffer | string | number | boolean | null>} */ this._buffer = [];

    //this will be registered as the first 'end' listener
    //must call destroy next tick, to make sure we're after any
    //stream piped from here.
    //this is only a problem if end is not emitted synchronously.
    //a nicer way to do this is to make sure this is the last listener for 'end'

    this.on('end', () => {
      this.readable = false
      if(!this.writable && this.autoDestroy)
        process.nextTick(() => this.destroy())
    })
  }

  /** @param {Buffer | string | number | boolean | null} data */
  write(data) {
    this._writeHandler.call(this, data)
    return !this.paused
  }

  /** @private */
  _drain() {
    var buffer = this._buffer;

    while(buffer.length && !this.paused) {
      var data = buffer.shift()
      if(null === data)
        this.emit('end')
      else
        this.emit('data', data)
    }
  }

  /** @private */
  _end() {
    // @see https://github.com/dominictarr/through/pull/49
    //   end called while paused for Readable Streams #49
    if (this.paused){
      this.on('resume', () => this._end() )
    } else if (this.writable) {
      this.writable = false
      this._endHandler.call(this)
      if(!this.readable && this.autoDestroy)
        this.destroy()
    };
  }

  /** @param {Buffer | string | number | boolean | null} data */
  queue(data) {
    if(!this._ended){
      if(data === null) this._ended = true
      this._buffer.push(data)
      this._drain()
    }
  }

  /*
  push(data) {
    if(!this._ended){
      if(data === null) this._ended = true
      this._buffer.push(data)
      this._drain()
    }
  } */

  /** @param {Buffer | string | number | boolean | null} data */
  end(data) {
    if(!this.ended){
      this.ended = true
      if(arguments.length) this.write(data)
      this._end() // will emit or queue
    }
  }

  destroy() {
    if(!this.destroyed){
      this.destroyed = true
      this.ended = true
      this._buffer.length = 0
      this.writable = this.readable = false
      this.emit('close')
    }
  }

  pause() {
    if(!this.paused){
      this.paused = true
    }
  }

  resume() {
    if(this.paused) {
      this.paused = false
      this.emit('resume')
    }
    this._drain()
    //may have become paused again,
    //as drain emits 'data'.
    if(!this.paused)
      this.emit('drain')
  }
}
