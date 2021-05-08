import Layout from '../components/Layout'
import Swiper, { loadSwiper } from '../components/Swiper'
import Movie from '../components/Movie'

export default function Home({ swiper }) {
  console.log('dyk---swiper---', swiper)
  return (
    <div>
      <Layout>
        <Swiper data={swiper} />
        <Movie />
      </Layout>
    </div>
  )
}
export async function getStaticProps() {
  // 获取轮播图数据
  let { data: swiper } = await loadSwiper()
  return {
    props: {
      swiper
    }
  }
}
