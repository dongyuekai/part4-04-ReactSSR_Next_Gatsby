import React from 'react'
import { Router } from '@reach/router'
import PrivateRoute from '../components/PrivateRoute'
import Settings from '../components/settings'
import Create from '../components/create'

export default function App() {
  return (
    <Router>
      {/* 普通的页面 登录不登录都能访问*/}
      {/* <Settings path='/app/settings' /> */}

      {/* 受保护的路由页面 只有登录能方位 否则跳转到登录页 */}
      <PrivateRoute component={Settings} path='/app/settings' />
      <PrivateRoute component={Create} path='/app/create' />
    </Router>
  )
}