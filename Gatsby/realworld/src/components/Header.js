import React from 'react'

export default function Header() {
  return (
    <nav className='navbar navbar-light'>
      <div className='container'>
        <a className='navbar-brand' href='index.html'>
          conduit
        </a>
        <ul className='nav navbar-nav pull-xs-right'>
          <li className='nav-item'>
            <a className='nav-link active'>Home</a>
          </li>
          
        </ul>
      </div>
    </nav>
  )
}
function Login({ username }) {
  return (
    <>
      <li className="nav-item">
        <a className="nav-link">
          <i className="ion-compose" />
          &nbsp;New Post
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link">
          <i className="ion-gear-a" />
          &nbsp;Settings
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link">{username}</a>
      </li>
    </>
  )
}

function Logout() {
  return (
    <>
      <li className="nav-item">
        <a className="nav-link">Sign in</a>
      </li>
      <li className="nav-item">
        <a className="nav-link">Sign up</a>
      </li>
    </>
  )
}