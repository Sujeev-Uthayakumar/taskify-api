const express = require("express");
require("./db/mongoose");
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
  console.log("Server is up on port " + port);
});

// const Task = require("./models/task");
// const User = require("./models/user");
// const main = async () => {
// const task = await Task.Task.findById("6136195948f181f0b41794ce");
// await task.populate("owner").execPopulate();
// console.log(task.owner);
//   const user = await User.User.findById("61361900fe992227e4e88b3a");
//   await user.populate("tasks").execPopulate();
//   console.log(user.tasks);
// };
// main();
