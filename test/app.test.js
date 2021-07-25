const request = require('supertest');
const app = require('../index');
const expect = require('chai').expect;

describe('Authentication tests', function() {
  let token;

  it('POST /login', async function() {
    const loginResponse = await request(app)
      .post('/login')
      .send({
        email: 'user1@gmail.com',
        password: "password1"
      })
      .set('Accept', 'application/json')

    expect(loginResponse.status).to.eql(200);
    expect(loginResponse.body.email).to.eql('user1@gmail.com');
    expect(loginResponse.body.id).to.eql(1);

    token = loginResponse.body.token;
  });

  it('GET /greeting', async function() {
    const greetingResponse = await request(app)
      .get('/greeting')
      .set('Authorization', `Bearer ${token}`);

    expect(greetingResponse.status).to.eql(200);
    expect(greetingResponse.body).to.eql('Welcome!');
  })
});