var chai = require('chai')
chai.should()

describe('fattr', function () {
  var fattr = require('../')
  
  it('returns a function', function () {
    var fn = fattr(function () {

    })

    fn.should.be.a('function')
  })

  it('can add attributes to a function', function () {
    var fn = fattr('attr', 'attr2', function () {

    })
    fn.should.have.property('attr')
    fn.should.have.property('attr2')
  })

  it('can take an object or key/val pair', function () {
    var fn = fattr({awesome: 'yep'}, function () {})
    fn.should.have.property('awesome')
    fn.awesome.should.equal('yep')
  })
})