import React from 'react'
import ReactDOM from 'react-dom'
import Home from '../share/pages/Home'
import { BrowserRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import routes from '../share/routes'
import { Provider } from 'react-redux'
import store from './createStore'

// hydrate在二次渲染的时候会复用dom节点
// ReactDOM.hydrate(<Home />, document.getElementById('root'))
// 客户端路由
ReactDOM.hydrate(
  <Provider store={store}>
    <BrowserRouter>{renderRoutes(routes)}</BrowserRouter>
  </Provider>,
  document.getElementById('root')
)