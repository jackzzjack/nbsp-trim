module.exports = function(text) {
	return text.trim().replace(/&nbsp;/g, '');
}
