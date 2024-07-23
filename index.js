const  jsonServer = require('json-server')  
const  MpServer = jsonServer.create();
const router = jsonServer.router('db.json');
const middleWare = jsonServer.defaults();
const PORT = 4000 || process.env.PORT

MpServer.use(middleWare)
MpServer.use(router)
MpServer.listen(PORT, ()=> {
   console.log(`todo list server running at ${PORT}`) 
})