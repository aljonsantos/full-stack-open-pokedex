const supertest = require('supertest')
const app = require('../app')
const api = supertest(app)

test('health check', async () => {
  const response = await api.get('/health')
  expect(response.status).toBe(200)
  expect(response.text).toBe('ok')
})