import Layout from '../../components/Layout'
import { Box, Heading, Divider, Text } from '@chakra-ui/react'
import { css } from '@emotion/react'
import axios from 'axios'
import { baseURL } from '../../axiosConfig'

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
export default function Detail({detail}) {
  console.log('dyk--detail--', detail)
  return (
    <Layout>
      <Box maxW={1200} mx='auto' mt='70px'>
        <Heading as='h2' size='xl'>
        {detail.title}
        </Heading>
        <Heading mt='10px' as='h4' size='lg' color='gray.500' fontWeight='light'>
          The results are out of this world!
        </Heading>
        <Divider mt='10px' />
        <Box mt='10px' overflow='hidden'>
          <Text float='left'>作者：{detail.author}</Text>
          <Text float='right'>发布时间：{detail.publish}</Text>
        </Box>
        <Divider mt='10px' />
        <Box css={DetailContainer} dangerouslySetInnerHTML={{__html: detail.content}}>
        </Box>
      </Box>
    </Layout>
  )
}

// 获取到用户能够访问的所有的路由参数
export async function getStaticPaths() {
 let { data } = await axios.get('/api/videos',{ baseURL })
 let paths = data.map(id=>({params:{id}}))
 return {
   paths,
   fallback: false
 }
}
// 根据参数获取其对应的数据
export async function getStaticProps({params}) {
  let id = params.id
  let { data:detail } =  await axios.get(`/api/detail?id=${id}`,{baseURL})
  return {
    props: {
      detail
    }
  }
}
