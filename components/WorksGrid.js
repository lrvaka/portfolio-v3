import { Container, Flex, Box, Heading, Text, SimpleGrid } from "@chakra-ui/react"
import GridItem from "./GridItem"
import palmTree from '../public/palm-tree.png'
import NextImage from 'next/image'

const WorksGrid = () => (
  <Container maxW="container.md">
    <Flex flexDir="column" mb="10">
      <Flex gap="1">
        <Box w="15px">
          <NextImage src={palmTree} alt="palm tree" />
        </Box>
        <Heading as="h3" fontSize="lg" fontWeight="600">
          Cool Stuff
        </Heading>
      </Flex>
      <Text fontWeight="100" fontSize="sm">
        Below is a list of some cool stuff I've worked on.
      </Text>
    </Flex>
    <SimpleGrid columns={[1, 2, 2]} gap={6} px="12">
      <GridItem thumbnail={ewf} title="Exquisite Wood Floors">
        Commissioned Web Design/Dev
      </GridItem>
      <GridItem thumbnail={ewf} title="Exquisite Wood Floors">
        Commissioned Web Design/Dev
      </GridItem>
      <GridItem thumbnail={ewf} title="Exquisite Wood Floors">
        Commissioned Web Design/Dev
      </GridItem>
      <GridItem thumbnail={ewf} title="Exquisite Wood Floors">
        Commissioned Web Design/Dev
      </GridItem>
    </SimpleGrid>
  </Container>
)
