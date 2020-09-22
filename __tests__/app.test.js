const request = require('supertest');
const app = require('../lib/app');

describe('createResponse', () => {
  it('should respond with "hi"', async() => {
    const res = await request(app)
      .get('/');

    
    expect(res.text).toEqual('Hi');
  });
});
