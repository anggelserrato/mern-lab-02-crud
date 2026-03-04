let tasks = [];

export const getAllTasks = (req, res) => {
  res
    .status(200)
    .json({ data: tasks, message: 'Tasks retrieved successfully' });
};

export const getTaskById = (req, res) => {
  const task = tasks.find((t) => t.id === req.params.id);
  if (task) {
    res
      .status(200)
      .json({ data: task, message: 'Task retrieved successfully' });
  } else {
    res.status(404).json({ message: 'Task not found' });
  }
};

export const createTask = (req, res) => {
  if (!req.body.title || req.body.title.trim() === '') {
    return res.status(400).json({ message: 'Title is required' });
  }
  const newTask = {
    id: Date.now().toString(),
    title: req.body.title,
    completed: false,
  };
  tasks.push(newTask);
  res.status(201).json({ data: newTask, message: 'Task created successfully' });
};

export const updateTask = (req, res) => {
  const task = tasks.find((t) => t.id === req.params.id);
  if (task) {
    if (req.body.title !== undefined && req.body.title.trim() === '') {
      return res.status(400).json({ message: 'Title cannot be empty' });
    }
    task.title = req.body.title || task.title;
    task.completed =
      req.body.completed !== undefined ? req.body.completed : task.completed;
    res.status(200).json({ data: task, message: 'Task updated successfully' });
  } else {
    res.status(404).json({ message: 'Task not found' });
  }
};

export const deleteTask = (req, res) => {
  const deletedTaskIndex = tasks.findIndex((t) => t.id === req.params.id);
  if (deletedTaskIndex !== -1) {
    const deletedTask = tasks.splice(deletedTaskIndex, 1);
    res
      .status(200)
      .json({ data: deletedTask[0], message: 'Task deleted successfully' });
  } else {
    res.status(404).json({ message: 'Task not found' });
  }
};
