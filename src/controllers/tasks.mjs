const getAllTasks = (req, res) => {
  res.send('Get all tasks');
}

const createTask = (req, res) => {
  res.send('Create task');
}

const getTask = (req, res) => {
  res.send('Get task');
}

const updateTask = (req, res) => {
  res.send('Update task');
}

const deleteTask = (req, res) => {
  res.send('Delete task');
}

export { getAllTasks, createTask, getTask, updateTask, deleteTask};