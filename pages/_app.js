import { ChakraProvider, Grid, GridItem } from "@chakra-ui/react"
import { Global } from "@emotion/react"
import { theme } from "../lib/theme"
import NavBar from "../components/NavBar"
import gsap from "gsap"
import useIsomorphicLayoutEffect from "../components/hooks/useIsomorphicLayoutEffect"
import SplitText from "gsap/dist/SplitText"
import ScrollSmoother from "gsap/dist/ScrollSmoother"
import ScrollTrigger from "gsap/dist/ScrollTrigger"
import MainLayout from "../components/layouts/MainLayout"

function MyApp({ Component, pageProps }) {
  useIsomorphicLayoutEffect(() => {
    gsap.registerPlugin(ScrollSmoother, ScrollTrigger, SplitText)

    return () => {}
  }, [])

  return (
    <ChakraProvider theme={theme}>
      <GridItemStyle />
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </ChakraProvider>
  )
}

export default MyApp

export const GridItemStyle = () => (
  <Global
    styles={`
      .grid-item-thumbnail {
        border-radius: 12px;
      }
    `}
  />
)
