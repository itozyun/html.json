goog.provide( 'html2json.gulp' );

goog.require( 'html2json.node' );

html2json.gulp = function( opt_selector, opt_options ){
    const PluginError = require( 'plugin-error' ),
          through     = require( 'through2'     ),
          pluginName  = 'html2json',
          options     = opt_selector && typeof opt_selector === 'object'
                          ? opt_selector
                      : opt_options && typeof opt_options === 'object'
                          ? opt_options
                          : {};

    return through.obj(
        function( file, encoding, callback ){
            if( file.isNull() ) return callback();
    
            if( file.isStream() ){
                this.emit( 'error', new PluginError( pluginName, 'Streaming not supported' ) );
                return callback();
            };
            const now = performance.now();
            if( file.extname === '.html' || file.extname === '.htm' || file.extname === '.xhtml' || file.extname === '.php' ){
                try {
                    file.contents = Buffer.from(
                        JSON.stringify(
                            html2json( file.contents.toString( encoding ), opt_selector, opt_options ),
                            null,
                            options[ 'prettify' ] ? '    ' : ''
                        )
                    );
                    console.log( file.path.split( process.cwd() )[ 1 ].split( '\\' ).join( '/' ), performance.now() - now )
                    // .html => .html.json
                    // file.stem += file.extname;
                    file.extname = '.json';
                    this.push( file );
                } catch( O_o ) {
                    this.emit( 'error', new PluginError( pluginName, O_o ) );
                };
            } else {
                this.push( file );
            };
            callback();
        }
    );
};
