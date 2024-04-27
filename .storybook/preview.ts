import type {Preview} from '@storybook/react'
import React from 'react'

const preview: Preview = {
  decorators: [
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
}

export default preview