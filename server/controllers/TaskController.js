const TaskModel = require("../models/TaskModel");

module.exports.getTasks = async (req, res) => {
  const tasks = await TaskModel.find();
  res.send(tasks);
};

module.exports.saveTasks = async (req, res) => {
  const { task } = req.body;
  TaskModel.create({ task })
    .then((data) => {
      console.log("Saved successfully...");
      res.status(201).send(data);
    })
    .catch((err) => { 
      console.log(err);
      res.send({ error: err, msg: "Something went wrong!!" });
    });
};

module.exports.updateTasks = async (req, res) => {
  const { _id } = req.params;
  const { task } = req.body;
  TaskModel.findByIdAndUpdate(_id, { task })
    .then(() => res.send({msg:`${_id} Updated successfully...`}))
    .catch((err) => {
      console.log(err);
      res.send({ error: err, msg: "Something went wrong!!" });
    });
};

module.exports.deleteTasks = async (req, res) => {
  const { _id } = req.params;
  TaskModel.findByIdAndDelete(_id)
    .then(() => res.send({msg:`${_id} Deleted Successfully...`}))
    .catch((err) => {
      console.log(err);
      res.send({ error: err, msg: "Something went wrong!!" });
    });
};
