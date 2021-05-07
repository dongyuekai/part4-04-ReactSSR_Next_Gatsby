import React from 'react'
import server from './http'
import Home from '../share/pages/Home'
import { renderToString } from 'react-dom/server'

server.get('/', (req, res) => {
  const content = renderToString(<Home />)
  res.send(`
    <html>
      <head>
        <title>React SSR</title>
      </head>
      <body>
        <div id='root'>${content}</div>
        <script src='bundle.js'></script>
      </body>
    </html>
  `)
})