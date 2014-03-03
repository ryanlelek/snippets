
// Render Page
fs.readFile(path.join(__dirname + './../../public/index.html'), function (error, page) {
	if (error) { throw error; }
	res.setHeader('Content-Type', 'text/html');
	res.setHeader('Content-Length', page.length);
	res.end(page);
});