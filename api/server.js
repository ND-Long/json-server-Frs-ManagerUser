// See https://github.com/typicode/json-server#module
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)
// Add this before server.use(router)
server.use(jsonServer.rewriter({
    '/api/v1/*': '/$1',
    '/blog/:resource/:id/show': '/:resource/:id'
}))




server.use(router)
server.listen(8000, () => {
    console.log(`JSON server running at http://localhost:8000`)
})






// Export the Server API
module.exports = server
