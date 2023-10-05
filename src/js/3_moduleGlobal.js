var p_ATTR_NO_VALUE = {checked:!0,compact:!0,declare:!0,defer:!0,disabled:!0,ismap:!0,multiple:!0,nohref:!0,noresize:!0,noshade:!0,nowrap:!0,readonly:!0,selected:!0};


var EMPTY_ELEMENTS   = {link:!0,meta:!0,br:!0,hr:!0,img:!0,input:!0,area:!0,base:!0,col:!0,embed:!0,keygen:!0,param:!0/* ,source:!0 */}, // TODO Opera 9 support
    OMIT_CLOSE_TAG   = {p:!0,dt:!0,dd:!0,li:!0,option:!0,thead:!0,tfoot:!0,th:!0,tr:!0,td:!0,rt:!0,rp:!0,optgroup:!0,caption:!0,colgroup:!0,col:!0},
    NO_OMIT_CLOSE    = {a:!0,audio:!0,del:!0,ins:!0,map:!0,noscript:!0,video:!0},
    IS_XML_ROOT      = {svg:!0, math:!0},
    // IE5 : <table> の直前の </p> を省略すると <table> が <p> の子になってレイアウトが崩れる
    EXCLUDE_FROM_P   = {table:!0,img:!0,svg:!0,picture:!0,object:!0,embed:!0,video:!0,audio:!0,blockquot:!0,form:!0,fieldset:!0},
    SKIP_HTML_ESCAPE = {script:!0,style:!0,plaintext:!0,xmp:!0,noscript:!0};
    // Special Elements (can contain anything)

function p_isArray( value ){
    return value && value.pop === [].pop;
};

function p_isObject( value ){
    return value && typeof value === 'object';
};

function p_isString( str ){
    return '' + str === str;
};

function p_isNumber( n ){
    return n === n - 0;
};

function p_isStringOrNumber( v ){
    return p_isString( v ) || p_isNumber( v );
};

function p_isNumberString( v ){
    return p_isString( v ) && p_isNumber( + v ) && p_isNumber( parseInt( v, 10 ) );
};

function p_toNumber( v ){
    return p_isNumberString( v ) ? + v : v;
};

function p_isNodeList( value ){
    return p_isArray( value ) && p_isArray( value[ 0 ] );
};

function p_isNode( value ){
    return p_isArray( value ) && ( p_isNumber( value[ 0 ] ) || p_isString( value[ 0 ] ) );
};