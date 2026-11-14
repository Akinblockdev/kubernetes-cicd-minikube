
const test = require('node:test');
const assert = require('node:assert/strict');
const app = require('../src/app');

test('GET / returns application configuration', async () => {
  const server = app.listen(0);

  try {
    const port = server.address().port;
    const response = await fetch(`http://127.0.0.1:${port}/`);
    const data = await response.json();

    assert.equal(response.status, 200);
    assert.equal(data.status, 'running');
    assert.equal(data.application, process.env.APP_NAME || 'DevOps Winter Arc');
    assert.equal(data.environment, process.env.APP_ENV || 'development');
    assert.equal(data.logLevel, process.env.LOG_LEVEL || 'info');
    assert.equal(data.version, 'v3');
    assert.equal(data.apiKey, undefined);
  } finally {
    server.close();
  }
});

test('GET /health returns healthy', async () => {
  const server = app.listen(0);

  try {
    const port = server.address().port;
    const response = await fetch(`http://127.0.0.1:${port}/health`);
    const data = await response.json();

    assert.equal(response.status, 200);
    assert.equal(data.status, 'healthy');
    assert.equal(data.version, 'v3');
  } finally {
    server.close();
  }
});

