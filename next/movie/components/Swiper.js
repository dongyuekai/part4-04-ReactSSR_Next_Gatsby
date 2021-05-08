import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import Head from 'next/head'
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { Box, Button, Heading, Text } from '@chakra-ui/react'
import Link from 'next/link';

const swiperContainer = css`
  position: relative;
  & > .carousel:last-child {
    position: absolute;
    left: 0;
    bottom: 0;
    & > .thumbs-wrapper > .thumbs {
      display: flex;
      justify-content: center;
    }
  }
`
const CarouselItem = styled.div`
  position: relative;
  & > div {
    position: absolute;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
    color: #FFF;
    padding-top: 180px;
    text-align: left;
    width: 100%;
    max-width: 1200px;
    & > p {
      margin: 10px 0;
      font-size: 14px;
      width: 450px;
    }
  }
  & > img {
    filter: brightness(20%);
  }
`

export default function Swiper() {
  return (
    <>
      <Head>
        <link rel='stylesheet' href='/css/carousel.min.css' />
      </Head>
      <Carousel
        css={swiperContainer}
        showArrows={false}
        showIndicators={false}
        showStatus={false}
      >
        {
          [1, 3, 4].map(item => (
            <CarouselItem>
              <img src='/images/1.jpg' />
              <Box>
                <Heading as='h2' size='lg'>
                  我是头标题-我是头标题-我是头标题
            </Heading>
                <Text>
                  描述文件-描述文件-描述文件
            </Text>
                <Button colorScheme='red'>
                  <Link href='#'><a>CHECK DETAIL</a></Link>
                </Button>
              </Box>
            </CarouselItem>
          ))
        }
      </Carousel>
    </>
  )
}