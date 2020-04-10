# Object To String

Stringify objects as Strings(Custom Splicing).

### Installation

````javascript
npm i --save object2string
````

### Usage

````javascript
const object2string = require('object2string')
````

### Example

````javascript
const query = object2string({
    name: 'yumcc',
    age: 24,
    gender: 1,
    height: 170,
    weight: 65,
    blog: 'https://www.yumcc.com'
})
````

returns

````
name=yumcc&age=24&gender=1&height=170&weight=65&blog=https://www.yumcc.com
````

### Options

````javascript
const query = object2string({
    name: 'yumcc',
    age: 24,
    gender: 1,
    height: 170,
    weight: 65,
    blog: 'https://www.yumcc.com'
}, {
    sort: true, // default: false
    splicing: '|', // default: &
    relative: ':', // default: =
    encode: [ 'blog' ] // default: []
})
````

returns

````
age:24|blog:https%3A%2F%2Fwww.yumcc.com|gender:1|height:170|name:yumcc|weight:65
````