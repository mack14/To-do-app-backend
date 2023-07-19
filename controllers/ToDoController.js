const ToDoModels = require("../models/ToDoModels");

//getting all our to dos
module.exports.getToDo = async (req, res) => {
  const toDo = await ToDoModels.find();
  res.send(toDo);
};

//adding the to do in the database
module.exports.saveToDo = async (req, res) => {
  const { text } = req.body;
  ToDoModels.create({ text }).then((data) => {
    console.log("Added successfully");
    // console.log(data);
    res.send(data);
  });
};

//updating by id
module.exports.updateToDo = async (req, res) => {
  const { _id, text } = req.body;

  ToDoModels.findByIdAndUpdate(_id, { text })
    .then(() => res.send("Updated successfully"))
    .catch((err) => console.log(err));
};

//deleting by id
module.exports.deleteToDo = async (req, res) => {
  const { _id } = req.body;
  ToDoModels.findByIdAndDelete(_id)
    .then(() => res.send("Deleted successfully"))
    .catch((err) => console.log(err));
};
