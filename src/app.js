
const http = require('node:http');

const app = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json');

  if (req.url === '/') {
    res.writeHead(200);
    res.end(JSON.stringify({
      status: 'running',
      application: 'DevOps Winter Arc',
      version: 'v2'
    }));
  } else if (req.url === '/health') {
    res.writeHead(200);
    res.end(JSON.stringify({
      status: 'healthy',
      version: 'v2'
    }));
  } else {
    res.writeHead(404);
    res.end(JSON.stringify({
      error: 'Not Found'
    }));
  }
});

if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Application v2 running on port ${PORT}`);
  });
}

module.exports = app;

