import { Flex, Heading, Text } from "@chakra-ui/react"
import NextImage from "next/image"
import favicon from "../public/image.jpg"

const GridItem = ({ children, title, thumbnail = favicon }) => {
  return (
    <Flex w="100%" flexDir="column" justifyContent="center" alignItems="center">
      <NextImage
        src={thumbnail}
        alt={title}
        className="grid-item-thumbnail"
        placeholder="blur"
        loading="lazy"
      />
      <Heading as="h4" fontSize="sm" mt={2}>
        {title}
      </Heading>
      <Text fontSize="xs">{children}</Text>
    </Flex>
  )
}

export default GridItem
