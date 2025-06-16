import express from "express";

const app = express();
const port = 3000;

app.use(express.json());

app.use((req, res, next) => {
  console.log("Request received:", req.method, req.url);
  next();
});

app.use("/users", (req, res, next) => {
  console.log("Request received for route Users:", req.method, req.url);
  next();
});

app.get("/users", (req, res, next) => {
  console.log("Handeling GET /users method", req.method, req.url);
  res.send("GET /users route");
});

app.post("/users", (req, res, next) => {
  console.log("Handeling POST /users method", req.method, req.url);
  const body = req.body;
  body.timestamp = new Date().toISOString();
  console.log("Request body:", body);
  res.status(201).json(body);
});

app.use((err,req, res, next) => {
  console.error("General Error Handaling middleware",err.stack);
  res.status(500).send("Something went wrong!");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
