import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://localhost:8081/',
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjYW5FZGl0Q291cnNlIjp0cnVlLCJleHAiOjE3MTY3NDg3NzQsImlzQXV0aG9yIjp0cnVlLCJpc0NvYXV0aG9yIjp0cnVlLCJpc1RlYWNoZXIiOnRydWUsInN1YiI6IjIzNWMxNjdlLTZlNzktNDZmYi1hYjFiLTcyY2QyNjVlODBlNiJ9.Z8U1cv7OyWXUgXCw6KLUVV3D7oon3wRpUyxiS9vr60U',
  },
})

export const createChat = () => {
  return api.post('v1/dialogue/create')
}
