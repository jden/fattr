# fattr
function attributes

## usage
```js
var fattr = require('fattr')

var fn = fattr('attribute','authenticated', {version: 5}, function () {
  // stuff
})
// =>
// fn.attribute == true
// fn.authenticated == true
// fn.version = 5
```


## about

JavaScript only lets you declare a function name when creating a function (and even that's not specified/poorly implemented piror to ES6). Sometimes you might want to add other metadat to a function.

We could do:

```js
var fn = function () {
  // stuff
}
fn.attr = true
fn.other = {
  origin: 'earth'
}
```
But with long function bodies, this pushes important information to the bottom, where it might not be seen by someone reading through code quickly.

Borrowing from other programming languages, like C#, `fattr` lets us attach declarative attributes to our functions, giving us data we can work with elsewhere to extend or modify the behavior of our programs:

```js
var fn = fattr('attr', {other: {origin: earth}}, function () {
  // stuff
})
```

## installation

    $ npm install fattr


## running the tests

From package root:

    $ npm install
    $ npm test


## contributors

- jden <jason@denizac.org>


## license
MIT. (c) MMXIII AgileMD http://agilemd.com
