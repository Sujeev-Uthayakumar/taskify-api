require("../src/db/mongoose");
const Task = require("../src/models/task");

console.log(Task.Task.find({}));

Task.Task.findByIdAndDelete("612edebaf9ba4928ccf263c4")
  .then((task) => {
    console.log(task);
    return Task.Task.countDocuments({ completed: false });
  })
  .then((count) => {
    console.log(count);
  })
  .catch((error) => {
    console.log(error);
  });

const deleteTaskAndCount = async (id) => {
  const deleteTask = await Task.Task.findByIdAndDelete(id);
  const countTask = await Task.Task.countDocuments({ completed: false });
  return countTask;
};

deleteTaskAndCount("612ede02bcae3cf438aa1201")
  .then((count) => {
    console.log(count);
  })
  .catch((error) => {
    console.log(error);
  });
