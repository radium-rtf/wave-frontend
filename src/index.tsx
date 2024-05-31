import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {App} from './App'
import React from 'react'
import {Provider} from 'react-redux'
import store from './storage/store'

const rootElement = document.getElementById('root')
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = createRoot(rootElement!)

root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
)
