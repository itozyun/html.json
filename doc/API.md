# API

1. API の一覧
   1. html2json()
   2. html2json.gulp()
   3. json2json()
   4. json2json.gulp()
   5. json2html()
   6. json2html.gulp()
   7. json2html.stream()
   8. filter.gulp()
2. 使用可能な引数とオプションとそのデフォルト値
   1. 使用可能な引数
   2. 使用可能なオプションとそのデフォルト値
3. ハンドラー
   1. onInstruction
   2. onEnterNode
   3. onDocumentReady
   4. onError
4. オプション
   1. trimWhitespaces
   2. removeNewlineBetweenFullWidthChars
   3. keepComments, keepEmptyConditionalComment, keepCDATASections
   4. instructionAttrPrefix
   5. argumentBrackets
   6. useQuoteAlways
   7. useSingleQuote
   8. prettify

## 1. API の一覧

### 1.1. html2json()

~~~js
var json = html2json('<!DOCTYPE html><p>Hello, World!</p>');

json; // [9, '<!DOCTYPE html>', ['p', 'Hello, World!']]

html2json('<p>Hello, World!</p>'); // [11, ['p', 'Hello, World!']]
~~~

#### Arguments

|                  | required | type             | description                                  |
|:-----------------|:---------|:-----------------|:---------------------------------------------|
| htmlString       | ✓       | `string`         | HTML string                                  |
| allowInvalidTree | -        | `boolean=`       | Allow invalid trees, Default value is false. |
| onError          | -        | `function(str)=` | It is called if an error occurs.             |
| options          | -        | `Object=`        | See below for details.                       |

#### Return

html.json(!Array)

### 1.2. html2json.gulp()

~~~js
gulp.src('src/**/*.html')
    .pipe(html2json.gulp())
    .dest('json')
~~~

#### Arguments

|                  | required | type             | description                                  |
|:-----------------|:---------|:-----------------|:---------------------------------------------|
| onError          | -        | `function(str)=` | It is called if an error occurs.             |
| options          | -        | `Object=`        | See below for details.                       |

### 1.3. json2json()

~~~js
var json = [11, [7, 'date']];

json2json(
    json,
    (funcName)=>funcName==='date' ? new Date().toLocalString() : undefined
);

json; // [11, '2024/10/31 6:59:19']
~~~

#### Arguments

|                  | required | type                                                                 | description                      |
|:-----------------|:---------|:---------------------------------------------------------------------|:---------------------------------|
| rootHTMLJson     | ✓       | `!HTMLJson`                                                          | html.json                        |
| onInstruction    | -        | `function(funcName, ...args)\|Object.<funcName, function(...args)>=` | Instruction Handler              |
| onEnterNode      | -        | `function(vnode)\|[(number\|string), function(vnode)]`               | Enter Node Handler               |
| onDocumentReady  | -        | `function(vnode)=`                                                   | Document Ready Handler           |
| onError          | -        | `function(str)=`                                                     | It is called if an error occurs. |
| options          | -        | `Object=`                                                            | See below for details.           |

### 1.4. json2json.gulp()

~~~js
gulp.src('json/**/*.json')
    .pipe(json2json.gulp())
    .dest('json')
~~~

#### Arguments

|                  | required | type                                                                 | description                      |
|:-----------------|:---------|:---------------------------------------------------------------------|:---------------------------------|
| onInstruction    | -        | `function(funcName, ...args)\|Object.<funcName, function(...args)>=` | Instruction Handler              |
| onEnterNode      | -        | `function(vnode)\|[(number\|string), function(vnode)]`               | Enter Node Handler               |
| onDocumentReady  | -        | `function(vnode)=`                                                   | Document Ready Handler           |
| onError          | -        | `function(str)=`                                                     | It is called if an error occurs. |
| options          | -        | `Object=`                                                            | See below for details.           |

### 1.5. json2html()

~~~js
var html = json2html([9, '<!DOCTYPE html>', ['p', 'Hello, World!']]);

html; // "<!DOCTYPE html><p>Hello, World!"
~~~

#### Arguments

|                  | required | type                                                                 | description                      |
|:-----------------|:---------|:---------------------------------------------------------------------|:---------------------------------|
| rootHTMLJson     | ✓       | `!HTMLJson`                                                          | html.json                        |
| onInstruction    | -        | `function(funcName, ...args)\|Object.<funcName, function(...args)>=` | Instruction Handler              |
| onEnterNode      | -        | `function(vnode)\|[(number\|string), function(vnode)]`               | Enter Node Handler               |
| onDocumentReady  | -        | `function(vnode)=`                                                   | Document Ready Handler           |
| onError          | -        | `function(str)=`                                                     | It is called if an error occurs. |
| options          | -        | `Object=`                                                            | See below for details.           |

#### Return

HTML string

### 1.6. json2html.gulp()

~~~js
gulp.src('json/**/*.json')
    .pipe(json2html.gulp())
    .dest('json')
~~~

#### Arguments

|                  | required | type                                                                 | description                      |
|:-----------------|:---------|:---------------------------------------------------------------------|:---------------------------------|
| onInstruction    | -        | `function(funcName, ...args)\|Object.<funcName, function(...args)>=` | Instruction Handler              |
| onEnterNode      | -        | `function(vnode)\|[(number\|string), function(vnode)]`               | Enter Node Handler               |
| onError          | -        | `function(str)=`                                                     | It is called if an error occurs. |
| options          | -        | `Object=`                                                            | See below for details.           |

### 1.7. json2html.stream()

~~~js
const chunk = [];

fs.createReadStream(__dirname + '/index.html.json')
  .pipe(json2html.stream())
  .on('data', (chunk)=> {chunks.push(chunk)})
  .on('end', ()=> {console.log(chunks.join(''))});
~~~

#### Arguments

|                  | required | type                                                                 | description                      |
|:-----------------|:---------|:---------------------------------------------------------------------|:---------------------------------|
| onInstruction    | -        | `function(funcName, ...args)\|Object.<funcName, function(...args)>=` | Instruction Handler              |
| onEnterNode      | -        | `function(vnode)\|[(number\|string), function(vnode)]`               | Enter Node Handler               |
| onError          | -        | `function(str)=`                                                     | It is called if an error occurs. |
| options          | -        | `Object=`                                                            | See below for details.           |

### 1.8. filter.gulp()

~~~js
gulp.src('json/**/*.json')
    .pipe(filter.gulp(filter.STATIC))
    .dest('static.json')
~~~

#### Argument

|        | required | type     | description                    |
|:-------|:---------|:---------|:-------------------------------|
| filter | ✓       | `number` | filter.STATIC \| filter.DYNAMIC |

## 2. 使用可能な引数とオプションとそのデフォルト値

### 2.1. 使用可能な引数

|                                      | html2json          | json2json         | json2html, json2html.stream |
|:-------------------------------------|:-------------------|:------------------|:----------------------------|
| allowInvalidTree                     | ✓                 | -                 | -                           |
| onInstruction                        | -                  | ✓                | ✓                          |
| onEnterNode                          | -                  | ✓                | ✓                          |
| onDocumentReady                      | -                  | ✓                | -                           |
| onError                              | ✓                 | ✓                | ✓                          |

### 2.2. 使用可能なオプションとそのデフォルト値

|                                      | html2json          | json2json         | json2html, json2html.stream |
|:-------------------------------------|:-------------------|:------------------|:----------------------------|
| `trimWhitespaces`                    | `"normal"`, `true` | `"none"`, `false` | -                           |
| `removeNewlineBetweenFullWidthChars` | `false`            | `false`           | -                           |
| `keepCDATASections`                  | `false`            | `true`            | -                           |
| `keepComments`                       | `false`            | `true`            | -                           |
| `keepEmptyConditionalComment`        | `false`            | `false`           | -                           |
| `instructionAttrPrefix`              | `@define (":")`    | `@define (":")`   | `@define (":")`             |
| `argumentBrackets`                   | `@define ("()")`   | -                 | -                           |
| `useQuoteAlways`                     | -                  | -                 | `false`                     |
| `useSingleQuote`                     | -                  | -                 | `false`                     |
| `prettify`                           | `false`(gulp)      | `false`(gulp)     | -                           |

## 3. ハンドラー

### 3.1. onInstruction

~~~js
function onInstruction(funcName, ..args){
    switch(funcName){
        case 'date':
            return (new Date).toLocalString();
    }
};

// or

var onInstruction = {
    'date' : function(..args){
        return (new Date).toLocalString();
    },
    // ...
};

// ---
json2json(json, onInstruction);
~~~

#### Processing Instruction

onInstruction ハンドラーの戻り値とその影響

|                            | json2json                     | json2html                     |
|:---------------------------|:------------------------------|:------------------------------|
| `undefiend`                | そのまま                      | Processing Instruction の削除 |
| `null` or `""`             | Processing Instruction の削除 | Processing Instruction の削除 |
| `{string\|number}`         | テキストノードとして置換する  | テキストノードとして書き出す  |
| html.json                  | 置換する                      | 書き出す                      |
| `[7, "funcName", ...args]` | `onInstruction` で再処理      | `onInstruction` で再処理      |

#### Instruction Attribute

|                                                         | json2json                | json2html                |
|:--------------------------------------------------------|:-------------------------|:-------------------------|
| `undefiend`                                             | そのまま                 | 属性の削除               |
| `null`                                                  | 属性の削除               | 属性の削除               |
| `false`(`htmlparser.BOOLEAN_ATTRIBUTES` に列挙した属性) | 属性の削除               | 属性の削除               |
| `["funcName", ...args]`                                 | `onInstruction` で再処理 | `onInstruction` で再処理 |
| これ以外は属性値になる                                  |                          |                          |


### 3.2. onEnterNode

Node に到達したときにコールバックされる．

引数は DOM ライクに要素を操作できるオブジェクトだが、制限があるため注意．

~~~js
function onEnterNode(vnode){
    
};

// or

var onEnterNode = [
    nodeTypeOrTagName, // <= 1 or 3 or 'div' or '*'
    function(vnode){},
    // ...
];

// ---
json2json(json, null, onEnterNode);
~~~

### 3.3. onDocumentReady

onInstruction と onEnterNode のコールバックが終わってから、文書のルート VNode を引数にコールバックされる．

~~~js
function onDocumentReady(rootVNode){};

// ---
json2json(json, null, null, onDocumentReady);
~~~

### 3.4. onError

~~~js
function onError(stringOrError){};

// ---
json2json(json, null, null, null, onError);
~~~

## 4. オプション

### 4.1. `trimWhitespaces`

`"normal"`, `true`, `"aggressive"`, で有効になり、`"none"`, `false` で無効になる．

より詳しい情報は『[html.json と HTML の最小化](doc/MINIFY_HTML.md)』を確認します．

### 4.2. `removeNewlineBetweenFullWidthChars`

`true` の場合、全角文字の間の単一の改行文字を削除する

より詳しい情報は『[html.json と HTML の最小化](doc/MINIFY_HTML.md)』を確認します．

### 4.3. `keepComments`, `keepEmptyConditionalComment`, `keepCDATASections`

各ノードを削除しない

### 4.4. `instructionAttrPrefix`

Instruction Attribute の属性名の prefix．デフォルト値は `":"`．

### 4.5. `argumentBrackets`

Processing Instruction の引数を囲む記号を指定する．デフォルト値は `"()"`．

### 4.6. `useQuoteAlways`

HTML ファイルの出力時に、属性値のクォートの省略をしない．

### 4.7. `useSingleQuote`

HTML ファイルの出力時に、属性値を `''` で囲む．

### 4.8. `prettify`

html.json ファイルの出力時に format する．diff を取る際に便利．
