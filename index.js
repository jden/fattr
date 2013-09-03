// (...attrs: String|Object, fn: Function<T>) => Function<T>
function fattr (attrs, fn) {
  var attrs = [].slice.call(arguments)
  fn = attrs.pop()

  attrs.forEach(function (attr) {
    if (typeof attr === 'string') {
      fn[attr] = true
    }
    if (typeof attr === 'object') {
      for (var k in attr) {
        fn[k] = attr[k]
      }
    }
  })

  return fn
}

module.exports = fattr