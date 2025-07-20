import http from 'http';
import { runInNewContext } from 'vm';

const server = http.createServer((req, res) => {



  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  if (req.url === "/users" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "GET request to /users" }));
    return;
  }

  if (req.url === "/users" && req.method === "POST") {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
    });
    req.on("end", () => {
      const parsedBody = JSON.parse(body);
      console.log("Body: ", parsedBody);
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(
        JSON.stringify({ message: "POST request to /users", body: parsedBody })
      );
    });
    return;
  }

  res.writeHead(404, { 'Content-Type': 'text/plain' });
  res.end(`Error 404: Not Found at ${req.url} with method ${req.method}`);
});
const PORT = process.env.PORT || 3000;

server.listen(PORT,(req,err)=>{
  
console.log('Server is runing on port '+PORT)
})