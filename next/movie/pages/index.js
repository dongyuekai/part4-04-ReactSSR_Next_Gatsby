import Layout from '../components/Layout'
import Swiper from '../components/Swiper'
import Movie from '../components/Movie'

export default function Home() {
  return (
    <div>
      <Layout>
        <Swiper />
        <Movie />
      </Layout>
    </div>
  )
}
