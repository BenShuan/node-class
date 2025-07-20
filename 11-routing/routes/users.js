import {Router} from "express";

const usersRouter = Router();

// Example users data
const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
];

// GET /users - list all users
usersRouter.get("/", (req, res) => {
  res.json(users);
});

// GET /users/:id - get user by id
usersRouter.get("/:id", (req, res) => {
  const user = users.find((u) => u.id === parseInt(req.params.id));
  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }
  res.json(user);
});

// POST /users - add a new user
usersRouter.post("/", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ error: "Name is required" });
  }
  const newUser = {
    id: users.length + 1,
    name,
  };
  users.push(newUser);
  res.status(201).json(newUser);
});

export default usersRouter;
