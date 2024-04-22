var request = require('supertest');
var app = require('../index.js');
describe('GET /will', function() {
    it('respond with hello EG20203974', function(done) {
        request(app).get('/will').expect('{ "response": "Hello EG20203974" }', done);
    });
});