import React from 'react'
import ReactDOM from 'react-dom'
import Home from '../share/pages/Home'

// hydrate在二次渲染的时候会复用dom节点
ReactDOM.hydrate(<Home />, document.getElementById('root'))