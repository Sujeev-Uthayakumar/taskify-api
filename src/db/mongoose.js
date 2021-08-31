const mongoose = require("mongoose");
const validator = require("validator");

mongoose.connect("mongodb://127.0.0.1:27017/task-manager-api", {
  useNewURLParser: true,
  useCreateIndex: true,
});

const User = mongoose.model("User", {
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Email is invalid");
      }
    },
  },
  age: {
    type: Number,
    default: 0,
    validate(value) {
      if (value < 0) {
        throw new Error("Age must be a positive number");
      }
    },
  },
  password: {
    type: String,
    required: true,
    minlength: 7,
    trim: true,
    validate(value) {
      x = value.toLowerCase().includes("password");
      if (x) {
        throw new Error("Password cannot be added.");
      }
    },
  },
});

const me = new User({
  name: "    Andrew ",
  email: "MYEMAIL@MEAD.IO    ",
  password: "    ph312313    ",
});

me.save()
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

// const Task = mongoose.model("Task", {
//   description: {
//     type: String,
//     required: true,
//     trim: true,
//   },
//   completed: {
//     type: Boolean,
//     default: false,
//   },
// });

// const me = new Task({
//   description: "Study for exam",
//   completed: false,
// });

// me.save()
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
