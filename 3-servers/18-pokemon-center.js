// Pokémon Center 🐦‍🔥
// Codédex

const http = require('http');

const server = http.createServer((request, response) => {
  if (request.url === '/pikachu') {
    console.log('Pika Pika!');
    response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    response.end('<h1>⚡️ Pikachu</h1><img src="https://i.imgur.com/k5cfniM.png" alt="Pikachu">');
  } else if (request.url === '/sylveon') {
    console.log('Sylv Sylv!');
    response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    response.end('<h1>🎀 Sylveon</h1><img src="https://i.imgur.com/rKGgVEm.png" alt="Sylveon">');
  } else {
    response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    response.end('This Pokémon is currently resting!');
  }
});

server.listen(3000, () => {
  console.log('Pokémon Center is open! Visit http://localhost:3000');
});