import { extendTheme } from '@chakra-ui/react'
import "@fontsource/space-grotesk"

const customTheme = extendTheme({
  colors: {
    primary: '#EF4242'
  },
  fonts: {
    heading: `'Space Grotesk', sans-serif`,
    body: `'Space Grotesk', sans-serif`
  }
})

export default customTheme
