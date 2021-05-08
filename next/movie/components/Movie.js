import { Box, Heading, HStack, Image, Text } from "@chakra-ui/react";
import { MdMovie } from 'react-icons/md'

export default function Movie() {
  return (
    <Box maxW={1200} mx="auto" mt="20px">
      <HStack fontSize="24px">
        <MdMovie />
        <Heading as="h3" fontSize="24px">
          标题标题
        </Heading>
      </HStack>
      <HStack mt="20px" spacing={3}>
        {[1, 2, 3, 4, 5, 6, 7].map(movie => (
          <Box w={290} key={movie}>
            <Image src='/images/1.jpg' />
            <Text mt="10px">
              标题标题
            </Text>
          </Box>
        ))}
      </HStack>
    </Box>
  )
}