describe('application flow', () => {

  const sqlite3 = require('sqlite3').verbose();
  const request = require('supertest');

  var server;
  var db;
  const OLD_ENV = process.env;

  beforeEach(() => {
    jest.resetModules();
    process.env = { ...OLD_ENV };

    db = new sqlite3.Database(':memory:');
    server = require('../index.js');
  });

  afterEach(() => {
    process.env = OLD_ENV;
    server.default.close();
    db.close();
  })

  test('sign up user', (done) => {
    const gqlQuery = `
    mutation {
      login(email: "ye", password: "et")
    }`
    request(server.default)
      .post('/signup')
      .set('Content-Type', 'application/json')
      .send({ query: gqlQuery })
      .expect(200, done);
  })
})