// 1. Import the extendTheme function
import { extendTheme } from "@chakra-ui/react"
import { mode } from "@chakra-ui/theme-tools"

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  brand: {
    100: "#FF0066",
    200: "#941146",
    300: "#2a69ac",
  },
}

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
}

const styles = {
  global: (props) => ({
    body: {
      fontFamily: "body",
      color: mode("white", "white")(props),
      bg: mode("#232323", "#232323")(props),
    },
    h1: {
      lineHeight: "10%",
    },
  }),
}

const fonts = {
  heading: `'museo-sans-rounded', sans-serif`,
  body: `'museo-sans-rounded', sans-serif`,
}

export const theme = extendTheme({ colors, styles, config, fonts })
