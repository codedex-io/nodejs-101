// Dream House 🏡
// Codédex

const http = require('http');

const server = http.createServer((request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });

  if (request.url === '/') {
    response.end('<h1>🏡 Welcome to My Dream Home</h1><p>A cozy brownstone with a beautiful garden.</p>');
  } else if (request.url === '/living-room') {
    response.end('<h1>🛋️ Living Room</h1><p>A comfy couch, lots of books, and tons of plants.</p>');
  } else if (request.url === '/kitchen') {
    response.end('<h1>🍳 Kitchen</h1><p>Lots of counter space, and fully stocked with snacks.</p>');
  } else if (request.url === '/bedroom') {
    response.end('<h1>🛏️ Bedroom</h1><p>A king-size bed with soft pillows and light streaming in.</p>');
  } else {
    response.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
    response.end('<h1>404 Not Found</h1><p>This room doesn’t exist!</p>');
  }
});

server.listen(3000, () => {
  console.log('Dream Home is ready! Visit http://localhost:3000');
});
