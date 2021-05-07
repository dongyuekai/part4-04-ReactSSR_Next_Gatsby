import express from 'express'

const app = express()

// 静态资源访问 在服务端能访问到public里的静态资源
app.use(express.static('public'))

app.listen(3000, () => {
  console.log('server is running on 3000 port-----')
})

export default app
