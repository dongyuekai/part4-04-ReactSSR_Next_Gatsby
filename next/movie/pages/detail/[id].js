import Layout from '../../components/Layout'
import { Box, Heading, Divider, Text } from '@chakra-ui/react'
import { css } from '@emotion/react'

const DetailContainer = css`
  padding: 10px 0;
  & > p {
    font-size: 14px;
    margin-bottom: 10px;
  }
  & > img {
    margin-bottom: 10px;
    display: block;
  }
`
export default function Detail() {
  return (
    <Layout>
      <Box maxW={1200} mx='auto' mt='70px'>
        <Heading as='h2' size='xl'>
          Marvel Mission Recap:Marvel Mission Recap:
        </Heading>
        <Heading mt='10px' as='h4' size='lg' color='gray.500' fontWeight='light'>
          The results are out of this world!
        </Heading>
        <Divider mt='10px' />
        <Box mt='10px' overflow='hidden'>
          <Text float='left'>作者：Tomas</Text>
          <Text float='right'>发布时间：2045-04-03</Text>
        </Box>
        <Divider mt='10px' />
        <Box css={DetailContainer}>
          <p>
            Config agent Config agentConfig agentConfig agentConfig agentConfig
            agentConfig agentConfig agentConfig agent
          </p>
          <p>
            Config agent Config agentConfig agentConfig agentConfig agentConfig
            agentConfig agentConfig agentConfig agent
          </p>
          <p>
            Config agent Config agentConfig agentConfig agentConfig agentConfig
            agentConfig agentConfig agentConfig agent
          </p>
        </Box>
      </Box>
    </Layout>
  )
}