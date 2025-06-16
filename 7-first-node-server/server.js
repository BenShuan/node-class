import http from 'http';

const server = http.createServer((req, res) => {

  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, World!\n');
});
const PORT = process.env.PORT || 3000;

server.listen(PORT,(req,err)=>{
  
console.log('Server is runing on port '+PORT)
})