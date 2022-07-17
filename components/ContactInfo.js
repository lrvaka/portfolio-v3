import { Box, Flex, IconButton } from "@chakra-ui/react"
import { IoIosPaper } from "react-icons/io"
import {
  AiFillGithub,
  AiOutlineMail,
  AiOutlineCodeSandbox,
} from "react-icons/ai"
import { motion } from "framer-motion"
import ChakraBox from "./utils/ChakraBox"

const variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 5,
      staggerChildren: 0.2,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.02, 1.25, 0.9, 1.13],
    },
  },
}

const ContactButton = ({ aria, icon }) => (
  <IconButton
    as={motion.button}
    variants={item}
    size="sm"
    title={aria}
    icon={icon}
    variant="outline"
    _focus={{ bgColor: "brand.200" }}
    _active={{ bgColor: "brand.200" }}
    _selected={{ bgColor: "brand.200" }}
    _hover={{ bgColor: "brand.200" }}
    color="brand.100"
    border="brand.100"
    aria-label={aria}
  />
)

const ContactInfo = () => {
  return (
    <ChakraBox
      initial="hidden"
      animate="show"
      variants={variants}
      display="flex"
      justifyContent="space-around"
      pt="2"
    >
      <ContactButton icon={<AiOutlineMail />} aria="Email" />
      <ContactButton icon={<AiFillGithub />} aria="Github" />
      <ContactButton icon={<AiOutlineCodeSandbox />} aria="CodeSandBox" />
      <ContactButton icon={<IoIosPaper />} aria="Resume" />
    </ChakraBox>
  )
}

export default ContactInfo
