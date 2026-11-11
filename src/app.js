const http = require('node:http');

const app = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json');

  if (req.url === '/health') {
    res.writeHead(200);
    return res.end(JSON.stringify({ status: 'healthy' }));
  }

  if (req.url === '/') {
    res.writeHead(200);
    return res.end(JSON.stringify({
      message: 'Welcome to Day 30 DevOps Winter Arc!',
      project: 'Kubernetes CI/CD with GitHub Actions',
      status: 'running'
    }));
  }

  res.writeHead(404);
  res.end(JSON.stringify({ error: 'Not Found' }));
});

if (require.main === module) {
  app.listen(3000, '0.0.0.0', () => {
    console.log('Server running on port 3000');
  });
}

module.exports = app;
