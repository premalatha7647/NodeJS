const server = require('./src/server')
const port = process.env.PORT || 3000 // You can use environment variables for port configuration
const startServer = () => {
  server.listen(port, () => {
    console.log(`Server is running on port ${port}`)
  })
}
startServer()
