// See https://github.com/typicode/json-server#module
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)
// Add this before server.use(router)
server.use(jsonServer.rewriter({
    '/*': '/$1',
    '/blog/:resource/:id/show': '/:resource/:id'
}))

// router.render = (req, res) => {
//     return res.status(200).json({
//         message: "ok"
//     })
// }

server.use(router)
server.listen(8000, () => {
    console.log(`JSON server running at http://localhost:8000`)
})

// Export the Server API
module.exports = server
