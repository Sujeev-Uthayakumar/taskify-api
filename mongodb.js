//CRUD: Create, Read, Update, Delete
const mongodb = require("mongodb");
const ObjectID = mongodb.ObjectID;
const MongoClient = mongodb.MongoClient;

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

// const id = new ObjectID();
// console.log(id);
// console.log(id.getTimestamp());

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log("Unable to connect to database");
    }
    const db = client.db(databaseName);

    // db.collection("users").findOne(
    //   { _id: new ObjectID("612a42ac3f6581928c15ef85") },
    //   (error, user) => {
    //     if (error) {
    //       return console.log("Unable to fetch user.");
    //     }
    //     console.log(user);
    //   }
    // );

    // db.collection("users")
    //   .find({ age: 27 })
    //   .toArray((error, users) => {
    //     if (error) {
    //       return console.log("Unable to fetch users");
    //     }
    //     console.log(users);
    //   });

    // db.collection("users")
    //   .find({ age: 27 })
    //   .count((error, count) => {
    //     if (error) {
    //       return console.log("Unable to fetch users");
    //     }
    //     console.log(count);
    //   });

    db.collection("tasks").findOne(
      { _id: new ObjectID("612a3d491596f873c8d5c66e") },
      (error, task) => {
        if (error) {
          return console.log("Unable to fetch task.");
        }
        console.log(task);
      }
    );

    db.collection("tasks")
      .find({ completed: false })
      .toArray((error, tasks) => {
        if (error) {
          return console.log("Unable to fetch tasks");
        }
        console.log(tasks);
      });
  }
);
