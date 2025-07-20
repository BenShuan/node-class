import express from "express";
import usersRouter from "./routes/users.js"; 

const app = express();
const port = 3000;

app.use(express.json());

app.use((req, res, next) => {
  console.log("Request received:", req.method, req.url);
  next();
});

app.use("/users", usersRouter);

app.use((err, req, res, next) => {
  console.error("General Error Handaling middleware", err.stack);
  res.status(500).send("Something went wrong!");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
