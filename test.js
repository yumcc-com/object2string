const object2string = require('./index')
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

console.log(query)