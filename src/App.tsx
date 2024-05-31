import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {Layout} from './common/Layout'
import {Home} from './pages/Home/Home'
import {ThemeProvider} from 'react-jss'
import {theme} from './types'
import {ENVProvider} from './common/ENVProvider'

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  )
}
