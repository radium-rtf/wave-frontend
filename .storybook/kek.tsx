import {ThemeProvider} from 'react-jss'
import {theme} from '../src/types'
import React from 'react'

export const ThemeDecorator = storyFn => (
  <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
)
