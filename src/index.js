const express = require("express");
require("./db/mongoose");
const User = require("./models/user");
const Task = require("./models/task");
const { reset } = require("nodemon");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.post("/users", (req, res) => {
  const user = new User.User(req.body);

  user
    .save()
    .then(() => {
      res.status(201).send(user);
    })
    .catch((error) => {
      res.status(400).send(error);
    });
});

app.get("/users", (req, res) => {
  User.User.find({})
    .then((users) => {
      res.send(users);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

app.get("/users/:id", (req, res) => {
  const _id = req.params.id;

  User.User.findById(_id)
    .then((user) => {
      if (!user) {
        return res.status(404).send();
      }
      res.send(user);
    })
    .catch((error) => {
      res.status(500).send();
    });
});

app.post("/tasks", (req, res) => {
  const task = new Task.Task(req.body);

  task
    .save()
    .then(() => {
      res.status(201).send(task);
    })
    .catch((error) => {
      res.status(400).send(error);
    });
});

app.get("/tasks", (req, res) => {
  Task.Task.find({})
    .then((users) => {
      res.send(users);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

app.get("/tasks/:id", (req, res) => {
  const _id = req.params.id;
  Task.Task.findById(_id)
    .then((task) => {
      if (!task) {
        return res.status(404).send();
      }
      res.status(201).send(task);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

app.listen(port, () => {
  console.log("Server is up on port " + port);
});
