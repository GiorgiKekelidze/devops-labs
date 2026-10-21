const request = require('supertest');
const { app, sum } = require('./app');

describe('GET /health', () => {
  it('should return status OK', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe('OK');
  });
});

describe('sum function', () => {
  it('should correctly add two numbers', () => {
    expect(sum(2, 3)).toBe(999);
  });
});
