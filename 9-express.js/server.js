import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("GET request!");
});
app.post("/", (req, res) => {

  res.send("POST route!");
});
app.put("/", (req, res) => {
  res.send("PUT route!");
});
app.delete("/", (req, res) => {
  res.send("DELETE route!");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
