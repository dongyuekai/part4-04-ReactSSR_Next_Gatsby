import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <div onClick={() => { console.log('hello') }}>Home works---</div>
      <Link to='/list'>jump to list</Link>
    </div>
  )
}
export default Home