const gulp = require( 'gulp' );

let gulpDPZ, ClosureCompiler;

gulp.task(
    'dist',
    gulp.series(
        function(){
            gulpDPZ         = gulpDPZ         || require( 'gulp-diamond-princess-zoning' );
            ClosureCompiler = ClosureCompiler || require( 'google-closure-compiler' ).gulp();

            return gulp.src(
                    [
                        './src/js/1_global.js',
                        './src/js/2_packageGlobal.js',
                        './src/js/3_moduleGlobal.js',
                        './src/js/html2json.js'
                    ]
                ).pipe(
                    gulpDPZ(
                        {
                            basePath          : [
                                './src' // not ./src/js
                            ]
                        }
                    )
                ).pipe(
                    ClosureCompiler(
                        {
                            externs           : [
                                './src/js-externs/externs.js',
                                './src/js-externs/tags-and-attributes.js'
                            ],
                            define            : [
                                'DEFINE_HTML2JSON__DEBUG=true'
                            ],
                            // compilation_level : 'ADVANCED',
                            // compilation_level : 'WHITESPACE_ONLY',
                            formatting        : 'PRETTY_PRINT',
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
            return gulp.src(
                    [
                        './src/js/1_global.js',
                        './src/js/2_packageGlobal.js',
                        './src/js/3_moduleGlobal.js',
                        './src/js/json2json.js'
                    ]
                ).pipe(
                    gulpDPZ(
                        {
                            basePath          : [
                                './src' // not ./src/js
                            ]
                        }
                    )
                ).pipe(
                    ClosureCompiler(
                        {
                            externs           : [
                                './src/js-externs/externs.js',
                                './src/js-externs/tags-and-attributes.js'
                            ],
                            define            : [
                                'DEFINE_HTML2JSON__DEBUG=true',
                                'DEFINE_HTML2JSON__EXPORT_JSON2JSON=true'
                            ],
                            // compilation_level : 'ADVANCED',
                            // compilation_level : 'WHITESPACE_ONLY',
                            formatting        : 'PRETTY_PRINT',
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
            return gulp.src(
                    [
                        './src/js/1_global.js',
                        './src/js/2_packageGlobal.js',
                        './src/js/3_moduleGlobal.js',
                        './src/js/json2html.js'
                    ]
                ).pipe(
                    gulpDPZ(
                        {
                            basePath          : [
                                './src' // not ./src/js
                            ]
                        }
                    )
                ).pipe(
                    ClosureCompiler(
                        {
                            externs           : [
                                './src/js-externs/externs.js',
                                './src/js-externs/tags-and-attributes.js'
                            ],
                            define            : [
                                'DEFINE_HTML2JSON__DEBUG=true',
                                'DEFINE_HTML2JSON__EXPORT_JSON2HTML=true'
                            ],
                            // compilation_level : 'ADVANCED',
                            // compilation_level : 'WHITESPACE_ONLY',
                            formatting        : 'PRETTY_PRINT',
                            warning_level     : 'VERBOSE',
                            // language_in       : 'ECMASCRIPT3',
                            // language_out      : 'ECMASCRIPT3',
                            js_output_file    : 'json2html.js'
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