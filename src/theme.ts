import { extendTheme } from '@chakra-ui/theme-utils'

export const theme = extendTheme({
  styles: {
    global: {
      html: {
        height: '100%',
        maxHeight: '100%',
      },
      body: {
        backgroundColor: 'LightBlue',
        height: '100%',
        maxHeight: '100%',
      },
      '#root': {
        maxHeight: '100%',
        height: '100%',
      },
    },
  },
})
