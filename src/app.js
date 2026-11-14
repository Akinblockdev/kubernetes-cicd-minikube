
const http = require('node:http');

const app = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json');

  const appName = process.env.APP_NAME || 'DevOps Winter Arc';
  const appEnv = process.env.APP_ENV || 'development';
  const logLevel = process.env.LOG_LEVEL || 'info';

  if (req.url === '/') {
    res.writeHead(200);
    res.end(JSON.stringify({
      status: 'running',
      application: appName,
      version: 'v3',
      environment: appEnv,
      logLevel: logLevel
    }));
  } else if (req.url === '/health') {
    res.writeHead(200);
    res.end(JSON.stringify({
      status: 'healthy',
      version: 'v3'
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
    console.log(`Application v3 running on port ${PORT}`);
  });
}

module.exports = app;

