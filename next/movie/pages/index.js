import Layout from '../components/Layout'
import Swiper, { loadSwiper } from '../components/Swiper'
import Movie, { loadMovie } from '../components/Movie'

export default function Home({ swiper, movie }) {
  console.log('dyk---swiper---', swiper)
  console.log('dyk---movie---', movie)

  return (
    <div>
      <Layout>
        <Swiper data={swiper} />
        <Movie data={movie} title='电影'/>
      </Layout>
    </div>
  )
}
export async function getStaticProps() {
  // 获取轮播图数据
  let { data: swiper } = await loadSwiper()
  // 获取电影列表数据
  let { data: movie } = await loadMovie()
  return {
    props: {
      swiper,
      movie
    }
  }
}
