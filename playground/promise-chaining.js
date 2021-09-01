require("../src/db/mongoose");
const User = require("../src/models/user");

// User.User.findByIdAndUpdate("612edd662232cde7ac63075c", { age: 1 })
//   .then((user) => {
//     console.log(user);
//     return User.User.countDocuments({ age: 1 });
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

const updateAgeAndCount = async (id, age) => {
  const user = await User.User.findByIdAndUpdate(id, { age });
  const count = await User.User.countDocuments({ age });
  return count;
};

updateAgeAndCount("612edd662232cde7ac63075c", 5)
  .then((count) => {
    console.log(count);
  })
  .catch((error) => {
    console.log(error);
  });
