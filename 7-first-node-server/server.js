import http from "http";

const server = http.createServer((req, res) => {
  res.statusCode=200;
  res.setHeader( "Content-Type", "application/json" );

  res.end(JSON.stringify({message:"Hello, World!"}));
});
const PORT = 3000;

server.listen(PORT, (req, err) => {
  console.log("Server is runing on port " + PORT);
});
