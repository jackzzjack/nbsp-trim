var ta = require('./index.js');
var tape = require('tape');

tape('Starting test ...', function(t) {
	t.equal(ta(' 123 '), '123 ');
	t.ok(2, "OK");
	t.pass("First test ok");
	t.end();
});
