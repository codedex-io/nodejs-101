// Emoji Story 🤭
// Codédex

const http = require('http'); // Import the http module

// Create a server
const server = http.createServer((request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/plain' }); 
  response.end('🏃🏻‍➡️🚉🍿📺🎞️🥺💔😭😭🍿🥤'); 
});

// Start the server and listen on port 3000
server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});
