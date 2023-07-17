import http from 'http'
import { routes } from './routes.js'
    
const hostname = '127.0.0.1'
const port = 3000

http.createServer((req, res) => {
  const {method, url} = req
  res.setHeader('Content-Type', 'application/json')
  console.log(`url is ${url} and method is ${method}`);
  const response =  routes[url][method]
  response(res)
}).listen(port, hostname)

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });