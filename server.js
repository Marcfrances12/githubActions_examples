const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hola món!\n');
  } else {
    res.statusCode = 404;
    res.end('No trobat\n');
  }
});

server.listen(3000, () => {
  console.log('Servidor escoltant al port 3000');
});
