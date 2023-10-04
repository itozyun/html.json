var p_html2json, p_json2html, p_json2json;

// copy to ./js-externs/externs.js
var p_ATTR_NO_VALUE = {checked:!0,compact:!0,declare:!0,defer:!0,disabled:!0,ismap:!0,multiple:!0,nohref:!0,noresize:!0,noshade:!0,nowrap:!0,readonly:!0,selected:!0};

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
    return p_isString( v ) && p_isNumber( + v );
};

function p_isNodeList( value ){
    return p_isArray( value ) && p_isArray( value[ 0 ] );
};

function p_isNode( value ){
    return p_isArray( value ) && ( p_isNumber( value[ 0 ] ) || p_isString( value[ 0 ] ) );
};