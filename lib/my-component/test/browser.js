var chai = require('chai');
var expect = chai.expect;

var testData = require('./data');

describe('test', function() {

    it('showcase', function(done) {
        expect(testData.name).to.equal('John');
        done();
    })

    it('access to dev-local', function(done) {
        console.log(require("dev-local"));
        done();
    })
})
