import { Task } from "../models/task.mjs";

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).send(tasks);
  } catch (error) {
    res.status(500).send
  }
}

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    task.save();
    res.status(200).send(req.body);
  } catch (error) {
    res.status(500).send({ meg: error});
  }
}

const getTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOne({ _id: taskID });
    if (!task)
      return res.status(404).send({ msg: `Task with id ${taskID} not found`});
    res.status(200).send(task);
  } catch (error) {
    res.status(500).send({ meg: error});
  }
}

const updateTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, { new: true, runValidators: true });
    if (!task)
      return res.status(404).send({ msg: `Task with id ${taskID} not found`});
    res.status(200).send(task);
  } catch (error) {
    res.status(500).send({ meg: error});
  }
}

const deleteTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOneAndDelete({ _id: taskID });
    if (!task)
      return res.status(404).send({ msg: `Task with id ${taskID} not found`});
    res.status(200).send({ msg: `Task with id ${taskID} deleted`});
  }catch (error) {
    res.status(500).send({ meg: error});
  }
}

export { getAllTasks, createTask, getTask, updateTask, deleteTask};