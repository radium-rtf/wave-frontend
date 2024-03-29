import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {Layout} from './common/Layout'
import {Home} from './pages/Home/Home'
import {ENVProvider} from './common/ENVprovider'

export const App = () => {
  return (
    <ENVProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={
              <Layout>
                <Home />
              </Layout>
            }
          />
        </Routes>
      </BrowserRouter>
    </ENVProvider>
  )
}
