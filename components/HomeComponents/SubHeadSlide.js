import { Heading } from "@chakra-ui/react"
import gsap from "gsap"
import { useLayoutEffect, useRef } from "react"
import SplitText from "gsap/dist/SplitText"

const SubHeadSlide = ({ children, addAnimation, index, ...props }) => {
  const el = useRef()

  useLayoutEffect(() => {
    gsap.set(el.current, { x: -50, skewX: -10, opacity: 0 })

    const tl = gsap.timeline({ ease: "power4.out" })

    tl.to(el.current, {
      x: 0,
      opacity: 1,
      skewX: 0,
    }).to(el.current, {
      delay: 1.5,
      x: 50,
      opacity: 0,
      skewX: 10,
    })

    addAnimation(tl, index)
  }, [addAnimation, index])

  return (
    <Heading
      ref={el}
      pos="absolute"
      overflow="hidden"
      as="h2"
      fontSize={["5xl"]}
      fontWeight="300"
      {...props}
    >
      {children}
    </Heading>
  )
}

export default SubHeadSlide
