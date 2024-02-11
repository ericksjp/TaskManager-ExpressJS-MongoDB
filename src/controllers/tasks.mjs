import { Task } from "../models/task.mjs";
import asyncWrapper from "../middlewares/async.mjs";
import CustomAPIError from "../errors/custom-error.mjs";

const getAllTasks = asyncWrapper (async (req, res) => {
    const tasks = await Task.find({});
    res.status(200).send(tasks);
});

const createTask = asyncWrapper (async (req, res) => {
    const task = await Task.create(req.body);
    task.save();
    res.status(200).send(req.body);
});

const getTask = asyncWrapper (async (req, res) => {
    const { id: taskID } = req.params;
    const task = await Task.findOne({ _id: taskID });
    if (!task)
      throw new CustomAPIError(`Task with id ${taskID} not found`, 404);
    res.status(200).send(task);
});

const updateTask = asyncWrapper (async (req, res) => {
    const { id: taskID } = req.params;
    const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, { new: true, runValidators: true });
    if (!task)
      throw new CustomAPIError(`Task with id ${taskID} not found`, 404);
    res.status(200).send(task);
});

const deleteTask = asyncWrapper (async (req, res) => {
    const { id: taskID } = req.params;
    const task = await Task.findOneAndDelete({ _id: taskID });
    if (!task)
      throw new CustomAPIError(`Task with id ${taskID} not found`, 404);
    res.status(200).send({ msg: `Task with id ${taskID} deleted`});
});

export { getAllTasks, createTask, getTask, updateTask, deleteTask};