const jsonServer= require ('json-server')
const server= jsonServer.create()
const router= jsonServer.router('./index.json')
const middlewares =jsonServer.defaults99({
     static:"./build"

})
const port = 3003
server.use(middlewares)
server.use(
    jsonServer.rewriter({
        '/api/*':'/$1',
    })
)
 server.use(router)
 server.listen(port,()=>{
    console.log('Server is running on ${port}')
 })

