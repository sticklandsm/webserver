const express = require('express')

const server = express()

server.get('/', (req, res) => {
  res.send('Hello Sean')
})

server.get('/hello', (req, res) => {
  console.log(req.query)
})

server.get('/:name', (req, res) => {
  console.log(req.params)
  res.send(`Go home, ${req.params.name} you're drunk!`)
})

server.get('/dogs', (req, res) => {
  res.send('hello its me sean, you are a dog')
})

const port = 3000
server.listen(port, () => {
  console.log('Server is listening on https://localhost:' + port)
})
