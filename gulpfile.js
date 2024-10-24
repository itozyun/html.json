const gulp = require( 'gulp' );

let ClosureCompiler;

let isDebug = false;
let isPrettify = true;

gulp.task(
    'dist',
    gulp.series(
        function(){
            console.log( '** 1. html2json' );
            ClosureCompiler = ClosureCompiler || require( 'google-closure-compiler' ).gulp();

            return gulp.src(
                    [
                        './src/closure-primitives/base.js',
                        './.submodules/htmlparser/src/js/**/*.js', 
                        './src/js/**/*.js'
                    ]
                ).pipe(
                    ClosureCompiler(
                        {
                            dependency_mode   : 'PRUNE',
                            entry_point       : 'goog:html2json.gulp',
                            externs           : [
                                //'./src/js-externs/console.js',
                                './node_modules/@externs/nodejs/v8/nodejs.js',
                                './node_modules/@externs/nodejs/v8/global.js',
                                //'./node_modules/@externs/nodejs/v8/fs.js',
                               // './node_modules/@externs/nodejs/v8/http.js',
                               // './node_modules/@externs/nodejs/v8/https.js',
                               // './node_modules/@externs/nodejs/v8/net.js',
                                './node_modules/@externs/nodejs/v8/events.js',
                                './node_modules/@externs/nodejs/v8/global/buffer.js',
                                './node_modules/@externs/nodejs/v8/stream.js',
                                //'./node_modules/@externs/nodejs/v8/zlib.js',
                                //'./node_modules/@externs/nodejs/v8/path.js',
                                './src/js-externs/externs.js',
                                './src/js-externs/tags-and-attributes.js'
                            ],
                            define            : [
                                'htmljson.DEFINE.DEBUG=' + isDebug,

                                'htmlparser.DEFINE.useXML=' + true,
                                'htmlparser.DEFINE.useVML=' + true,
                                'htmlparser.DEFINE.useDocTypeNode=' + true,
                                'htmlparser.DEFINE.useProcessingInstruction=' + true,
                                'htmlparser.DEFINE.useLazy=' + false,
                                'htmlparser.DEFINE.parsingStop=' + false,
                                'htmlparser.DEFINE.useCDATASection=' + true,
                                'htmlparser.DEFINE.attributePrefixSymbol=":"'
                            ],
                            // env               : 'CUSTOM',
                            compilation_level : isDebug    ? 'SIMPLE_OPTIMIZATIONS' : 'ADVANCED', // 'WHITESPACE_ONLY'
                            formatting        : isPrettify ? 'PRETTY_PRINT'         : 'SINGLE_QUOTES',
                            warning_level     : 'VERBOSE',
                            // language_in       : 'ECMASCRIPT3',
                            // language_out      : 'ECMASCRIPT3',
                            js_output_file    : 'html2json.js'
                        }
                    )
                ).pipe(
                    gulp.dest( 'dist' )
                );
        },
        function(){
            console.log( '** 2. json2json' );
            return gulp.src(
                    [
                        './src/closure-primitives/base.js',
                        './.submodules/htmlparser/src/js/**/*.js', 
                        './src/js/**/*.js'
                    ]
                ).pipe(
                    ClosureCompiler(
                        {
                            dependency_mode   : 'PRUNE',
                            entry_point       : 'goog:json2json.gulp',
                            externs           : [
                                // './src/js-externs/console.js',
                                './node_modules/@externs/nodejs/v8/nodejs.js',
                                './node_modules/@externs/nodejs/v8/global.js',
                                //'./node_modules/@externs/nodejs/v8/fs.js',
                               // './node_modules/@externs/nodejs/v8/http.js',
                               // './node_modules/@externs/nodejs/v8/https.js',
                               // './node_modules/@externs/nodejs/v8/net.js',
                                './node_modules/@externs/nodejs/v8/events.js',
                                './node_modules/@externs/nodejs/v8/global/buffer.js',
                                './node_modules/@externs/nodejs/v8/stream.js',
                                //'./node_modules/@externs/nodejs/v8/zlib.js',
                                //'./node_modules/@externs/nodejs/v8/path.js',
                                './src/js-externs/externs.js',
                                './src/js-externs/tags-and-attributes.js',
                                './src/js-externs/vnode.js'
                            ],
                            define            : [
                                'htmljson.DEFINE.DEBUG=' + isDebug
                            ],
                            // env               : 'CUSTOM',
                            compilation_level : true       ? 'SIMPLE_OPTIMIZATIONS' : 'ADVANCED', /* 'WHITESPACE_ONLY' */
                            formatting        : isPrettify ? 'PRETTY_PRINT'         : 'SINGLE_QUOTES',
                            warning_level     : 'VERBOSE',
                            // language_in       : 'ECMASCRIPT3',
                            // language_out      : 'ECMASCRIPT3',
                            js_output_file    : 'json2json.js'
                        }
                    )
                ).pipe(
                    gulp.dest( 'dist' )
                );
        },
        function(){
            console.log( '** 3. json2html' );
            return gulp.src(
                    [
                        './src/closure-primitives/base.js',
                        './.submodules/htmlparser/src/js/**/*.js', 
                        './src/js/**/*.js'
                    ]
                ).pipe(
                    ClosureCompiler(
                        {
                            dependency_mode   : 'PRUNE',
                            entry_point       : 'goog:json2html.gulp',
                            externs           : [
                                // './src/js-externs/console.js',
                                './node_modules/@externs/nodejs/v8/nodejs.js',
                                './node_modules/@externs/nodejs/v8/global.js',
                                //'./node_modules/@externs/nodejs/v8/fs.js',
                               // './node_modules/@externs/nodejs/v8/http.js',
                               // './node_modules/@externs/nodejs/v8/https.js',
                               // './node_modules/@externs/nodejs/v8/net.js',
                                './node_modules/@externs/nodejs/v8/events.js',
                                './node_modules/@externs/nodejs/v8/global/buffer.js',
                                './node_modules/@externs/nodejs/v8/stream.js',
                                //'./node_modules/@externs/nodejs/v8/zlib.js',
                                //'./node_modules/@externs/nodejs/v8/path.js',
                                './src/js-externs/externs.js',
                                './src/js-externs/tags-and-attributes.js'
                            ],
                            define            : [
                                'htmljson.DEFINE.DEBUG=' + isDebug
                            ],
                            // env               : 'CUSTOM',
                            compilation_level : isDebug    ? 'SIMPLE_OPTIMIZATIONS' : 'ADVANCED', /* 'WHITESPACE_ONLY' */
                            formatting        : isPrettify ? 'PRETTY_PRINT'         : 'SINGLE_QUOTES',
                            warning_level     : 'VERBOSE',
                            // language_in       : 'ECMASCRIPT3',
                            // language_out      : 'ECMASCRIPT3',
                            js_output_file    : 'json2html.js'
                        }
                    )
                ).pipe(
                    gulp.dest( 'dist' )
                );
        },
        function(){
            console.log( '** 4. json2html.stream' );
            return gulp.src(
                    [
                        './src/closure-primitives/base.js',
                        './.submodules/htmlparser/src/js/**/*.js',
                        // './node_modules/jsonparse/jsonparse.js',
                        // './node_modules/through/index.js',
                        './src/js/**/*.js'
                    ]
                ).pipe(
                    ClosureCompiler(
                        {
                            dependency_mode   : 'PRUNE',
                            entry_point       : 'goog:json2html.stream.module',
                            externs           : [
                                './node_modules/@externs/nodejs/v8/nodejs.js',
                                './node_modules/@externs/nodejs/v8/global.js',
                                //'./node_modules/@externs/nodejs/v8/fs.js',
                               // './node_modules/@externs/nodejs/v8/http.js',
                               // './node_modules/@externs/nodejs/v8/https.js',
                               // './node_modules/@externs/nodejs/v8/net.js',
                                './node_modules/@externs/nodejs/v8/events.js',
                                './node_modules/@externs/nodejs/v8/global/buffer.js',
                                './node_modules/@externs/nodejs/v8/stream.js',
                                //'./node_modules/@externs/nodejs/v8/zlib.js',
                                //'./node_modules/@externs/nodejs/v8/path.js',
                                './src/js-externs/externs.js',
                                './src/js-externs/tags-and-attributes.js'
                            ],
                            define            : [
                                'htmljson.DEFINE.DEBUG=' + isDebug
                            ],
                            // env               : 'CUSTOM',
                            compilation_level : isDebug ? 'SIMPLE_OPTIMIZATIONS' : 'ADVANCED', // 'WHITESPACE_ONLY'
                            warning_level     : 'VERBOSE',
                            // language_in       : 'ECMASCRIPT3',
                            // language_out      : 'ECMASCRIPT3',
                            output_wrapper    : isDebug ? '(function(require,String,Buffer,JSON,undefined){\n%output%\n})(require,String,Buffer,JSON,void 0);' : '%output%'
                        }
                    )
                ).pipe(
                    ClosureCompiler(
                        {
                            compilation_level : isDebug ? 'WHITESPACE_ONLY' : 'SIMPLE_OPTIMIZATIONS',
                            formatting        : isPrettify ? 'PRETTY_PRINT' : 'SINGLE_QUOTES',
                            warning_level     : 'QUIET',
                            js_output_file    : 'json2html.stream.js'
                        }
                    )
                ).pipe(
                    gulp.dest( 'dist' )
                );
        }
    )
);

gulp.task(
    'externs',
    gulp.series(
        function( cb ){
            const fs = require( 'fs' );
            const tagNames = {};
            const attrs = { 'className' : true, 'htmlFor' : true };
            // const htmlElementAttributes = require( 'html-element-attributes' );

            const htmlTagNames = eval(
                fs.readFileSync( './node_modules/html-tag-names/index.js' ).toString( 'UTF-8' )
                    .split(' */\nexport ').join( ' */\n' ) + ';(htmlTagNames)'
            );
            for( let i = 0, l = htmlTagNames.length; i < l; ++i ){
                tagNames[ htmlTagNames[ i ] ] = true;
            };

            const svgTagNames = eval(
                fs.readFileSync( './node_modules/svg-tag-names/index.js' ).toString( 'UTF-8' )
                    .split(' */\nexport ').join( ' */\n' ) + ';(svgTagNames)'
            );
            for( let i = 0, l = svgTagNames.length; i < l; ++i ){
                tagNames[ svgTagNames[ i ] ] = true;
            };

            //const mathmlTagNames = eval(
            //    fs.readFileSync( './node_modules/mathml-tag-names/index.js' ).toString( 'UTF-8' )
            //        .split(' */\nexport ').join( ' */\n' ) + ';(mathmlTagNames)'
            //);
            //for( let i = 0, l = mathmlTagNames.length; i < l; ++i ){
            //    tagNames[ mathmlTagNames[ i ] ] = true;
            //};

            const htmlElementAttributes = eval(
                fs.readFileSync( './node_modules/html-element-attributes/index.js' ).toString( 'UTF-8' )
                    .split(' */\nexport ').join( ' */\n' ) + ';(htmlElementAttributes)'
            );
            for( let tag in htmlElementAttributes ){
                const attributes = htmlElementAttributes[ tag ];
                for( let i = 0, l = attributes.length; i < l; ++i ){
                    attrs[ attributes[ i ] ] = true;
                };
            };

            const svgElementAttributes = eval(
                fs.readFileSync( './node_modules/svg-element-attributes/index.js' ).toString( 'UTF-8' )
                    .split(' */\nexport ').join( ' */\n' ) + ';(svgElementAttributes)'
            );
            for( let tag in svgElementAttributes ){
                const attributes = svgElementAttributes[ tag ];
                for( let i = 0, l = attributes.length; i < l; ++i ){
                    attrs[ attributes[ i ] ] = true;
                };
            };

            const ariaAttributes = eval(
                fs.readFileSync( './node_modules/aria-attributes/index.js' ).toString( 'UTF-8' )
                    .split(' */\nexport ').join( ' */\n' ) + ';(ariaAttributes)'
            );
            for( let i = 0, l = ariaAttributes.length; i < l; ++i ){
                attrs[ ariaAttributes[ i ] ] = true;
            };

            fs.writeFile(
                'src/js-externs/tags-and-attributes.js',
`// // THIS JS IS GENERATED BY "gulp externs". DO NOT EDIT!

// from wooorm/html-tag-names, wooorm/svg-tag-names, wooorm/mathml-tag-names
var htmlAndSVGAndMathMLTagNames =
` + JSON.stringify( tagNames, null, '    ' ) + ';' +
`
// from wooorm/html-element-attributes, wooorm/svg-element-attributes, wooorm/aria-attributes
var htmlAndSVGAndAriaAttributes =
` + JSON.stringify( attrs, null, '    ' ) + ';',
                cb
            );
        }
    )
);