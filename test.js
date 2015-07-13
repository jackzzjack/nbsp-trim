var ta = require('./index.js');
var tape = require('tape');

tape('Starting test ...', function(t) {
	t.equal(ta(' 123 '), '123');
	t.equal(ta('123 '), '123');
	t.equal(ta(' 123'), '123');
	t.equal(ta('&nbsp;123'), '123');
	t.equal(ta('123&nbsp;'), '123');
	t.equal(ta('1&nbsp;23'), '123');
	t.end();
});
