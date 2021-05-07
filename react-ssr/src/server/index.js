import server from './http'
import renderer from './renderer'

server.get('*', (req, res) => {
  res.send(renderer(req))
})