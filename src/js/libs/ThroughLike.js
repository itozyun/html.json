goog.provide( 'ThroughLike' );

/**
 * @interface
 * @struct
 */
ThroughLike = function(){};

/** @param {Buffer | string | number | boolean | null} chunk */
ThroughLike.prototype.queue = function( chunk ){};
