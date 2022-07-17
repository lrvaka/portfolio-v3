import Head from "next/head"
import { Box, Container, Heading, Flex } from "@chakra-ui/react"
import NextImage from "next/image"
import useIsomorphicLayoutEffect from "./hooks/useIsomorphicLayoutEffect"
import { useRef, useState, useCallback } from "react"
import useArrayRef from "./hooks/useArrayRef"
import gsap from "gsap"
import SplitText from "gsap/dist/SplitText"
import SubHeadSlide from "./HomeComponents/SubHeadSlide"

const Hero = () => {
  const [tl1, setTl] = useState(() => gsap.timeline({ repeat: -1 }))

  const addAnimation = useCallback(
    (animation, index) => {
      tl1.add(animation, index)
    },
    [tl1]
  )

  const imageRef = useRef()
  const helloRef = useRef()
  const nameRef = useRef()
  const subHeadRef = useRef()
  const [boxRefs, setBoxRef] = useArrayRef()

  useIsomorphicLayoutEffect(() => {
    if (!helloRef.current) return

    const helloText = new SplitText(helloRef.current, {
      type: "chars",
    })

    const nameText = new SplitText(nameRef.current, {
      type: "chars",
    })

    const subHeadText = new SplitText(subHeadRef.current, {
      type: "chars",
    })

    gsap.set(imageRef.current, {
      autoAlpha: 0.01,
      scale: 0,
      clipPath: "inset(100% 0 0 0)",
    })

    gsap.set(helloRef.current, { autoAlpha: 1 })
    gsap.set(helloText.chars, { y: -75, opacity: 0 })

    gsap.set(nameRef.current, { autoAlpha: 1 })
    gsap.set(nameText.chars, { y: 50, opacity: 0, skewX: -10 })

    gsap.set(subHeadRef.current, { autoAlpha: 1 })
    gsap.set(subHeadText.chars, { x: -50, opacity: 0, skewX: -10 })

    gsap
      .timeline()
      .to(helloText.chars, {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power4.out",
        stagger: 0.05,
      })

      .to(boxRefs.current, {
        minHeight: 1,
        duration: 1,
        ease: "power4.out",
      })
      .to(helloRef.current, { opacity: 0, duration: 0.5 }, "-=1.2")
      .to(
        nameText.chars,
        {
          y: 0,
          opacity: 1,
          skewX: 0,
          duration: 1,
          ease: "power4.out",
          stagger: {
            from: 0,
            amount: 1,
          },
        },
        "-=1"
      )
      .to(
        imageRef.current,
        {
          scale: 1,
          autoAlpha: 1,
          duration: 1,
          ease: "power4.out",
          clipPath: "inset(0% 0% 0 0)",
        },
        "-=0.5"
      )
      .to(
        subHeadText.chars,
        {
          x: 0,
          opacity: 1,
          skewX: 0,
          duration: 1,
          ease: "power4.out",
          stagger: {
            from: 0,
            amount: 1,
          },
        },
        "-=.5"
      )
      .add(tl1, "-=.5")

    return () => {}
  }, [])

  return (
    <Flex flexDir="column" pos="relative" justifyContent="center">
      <Heading
        ref={helloRef}
        visibility="hidden"
        pos="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        fontSize={["4xl"]}
        zIndex="2"
      >
        Welcome!
      </Heading>
      <Flex justifyContent="center" flexDir="column" pos="relative">
        <Heading
          ref={nameRef}
          visibility="hidden"
          as="h1"
          fontSize={["5xl"]}
          fontWeight="500"
          lineHeight="100%"
          pb="2"
          overflow="hidden"
        >
          Luke
          <br />
          Vakasisikakala
        </Heading>
        <Box
          ref={setBoxRef}
          pos="absolute"
          minH="104px"
          bgColor="brand.200"
          width="100%"
          bottom="0"
        />
      </Flex>
      <Flex gap="3" justifyContent="center" pt="2" pos="relative">
        <Box
          ref={setBoxRef}
          pos="absolute"
          minH="130.11px"
          bgColor="brand.200"
          width="100%"
          top="0"
          zIndex="1"
        />
        <Box
          visibility="hidden"
          ref={imageRef}
          pos="relative"
          maxW={"115.62px"}
          maxH={"122.12px"}
        >
          <NextImage
            src="/image.jpg"
            width="500"
            height="500"
            objectFit="cover"
          />
        </Box>
        <Box pos="relative">
          <Heading
            ref={subHeadRef}
            visibility="hidden"
            overflow="hidden"
            as="h2"
            fontSize={["5xl"]}
            fontWeight="300"
            lineHeight="110%"
          >
            Creative
          </Heading>
          <Box pos="relative" overflowX="hidden">
            <SubHeadSlide pos="relative" addAnimation={addAnimation} index={0}>
              Developer
            </SubHeadSlide>
            <SubHeadSlide top="0" addAnimation={addAnimation} index={2.5}>
              Designer
            </SubHeadSlide>
            <SubHeadSlide top="0" addAnimation={addAnimation} index={5}>
              Being
            </SubHeadSlide>
          </Box>
        </Box>
      </Flex>
    </Flex>
  )
}
export default Hero
