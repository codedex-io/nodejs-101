// Pokémon Center 🐦‍🔥
// Codédex

const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/pikachu') {
    console.log('Pika Pika!');
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>⚡️ Pikachu</h1><img src="https://i.imgur.com/k5cfniM.png" alt="Pikachu">');
  } else if (req.url === '/flareon') {
    console.log('Sylv Sylv!');
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>🎀 Sylveon</h1><img src="https://i.imgur.com/rKGgVEm.png" alt="Sylveon">');
  } else {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('This Pokémon is currently resting!');
  }
});

server.listen(3000, () => {
  console.log('Pokémon Center is open! Visit http://localhost:3000');
});
