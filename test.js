var assert = require('assert');
var trims = require('./index.js');

describe('nbsp-trim', function() {
	describe('#String("123")', function() {
		it('should return "123" when call the nbsp-trim', function() {
			assert.equal("123", trims("123"));
		});
	});

	describe('#String("&nbsp;123")', function() {
		it('should return "123" when call the nbsp-trim', function() {
			assert.equal("123", trims("&nbsp;123"));
		});
	});

	describe('#String("123&nbsp;")', function() {
		it('should return "123" when call the nbsp-trim', function() {
			assert.equal("123", trims("123&nbsp;"));
		});
	});
});
