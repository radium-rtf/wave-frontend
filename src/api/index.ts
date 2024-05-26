/* eslint-disable no-console */
import axios from 'axios'
import {Centrifuge} from 'centrifuge'

export const apiMain = axios.create({
  baseURL: 'http://localhost:8081/',
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjYW5FZGl0Q291cnNlIjp0cnVlLCJleHAiOjE3MTY3NDg3NzQsImlzQXV0aG9yIjp0cnVlLCJpc0NvYXV0aG9yIjp0cnVlLCJpc1RlYWNoZXIiOnRydWUsInN1YiI6IjIzNWMxNjdlLTZlNzktNDZmYi1hYjFiLTcyY2QyNjVlODBlNiJ9.Z8U1cv7OyWXUgXCw6KLUVV3D7oon3wRpUyxiS9vr60U',
  },
})

type messageType = {
  chatId: string
  content: {
    text: string
  }
}

type Message = {
  chat: {
    id: string
    lastMessage: string
    name: string
    type: string
  }
  content: {
    text: string
  }
  id: string
  parentMessageId: string
  senderId: string
  type: string
}

// Для описания массива объектов типа Message:
type Messages = Message[]

export const api = {
  createChat: (userId: string) => {
    return apiMain.post('/v1/dialogue/create', {
      userId,
    })
  },

  getToken: () => {
    return apiMain.get('/v1/user/token')
  },

  getChats: () => {
    return apiMain.get('/v1/chats')
  },

  getChatByName: (name: string) => {
    return apiMain.get(`v1/chats/token/${name}`)
  },

  sendMessage: (data: messageType) => {
    return apiMain.post('/v1/message', data)
  },

  getMessagesByName: (name: string) => {
    return apiMain.get<Messages>(`/v1/messages/${name}`, {
      params: {
        page: 1,
        pageSize: 50,
        sort: 'date',
        order: 'desc',
      },
    })
  },
}

const centrifugeInit = () => {
  const centrifuge = new Centrifuge('ws://localhost:6969/connection/websocket', {
    token: 'clientToken',
  })

  centrifuge
    .on('connecting', function (ctx) {
      console.log(`connecting: ${ctx.code}, ${ctx.reason}`)
    })
    .on('connected', function (ctx) {
      console.log(`connected over ${ctx.transport}`)
    })
    .on('disconnected', function (ctx) {
      console.log(`disconnected: ${ctx.code}, ${ctx.reason}`)
    })

  centrifuge.connect()
}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-expect-error
window.api = api
