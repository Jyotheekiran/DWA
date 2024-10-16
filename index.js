var http = require("http");
const port = 8000;

http.createServer(function(req, res) {
    res.writeHead(200, { "Content-Type": "text/html" }); // Ensure Content-Type is text/html
    res.end("<h1>Hello World!</h1>\n<p>I am Jyothi and welcome Dynamic Web Applications</p>"); // HTML content
}).listen(port, function() {
    console.log(`Node server is running on port ${port}...`);
});
