let tasks = [];

export const getAllTasks = (req, res) => {
  console.log('Getting all tasks');
};

export const getTaskById = (req, res) => {
  console.log(`Getting task with id ${req.params.id}`);
};

export const createTask = (req, res) => {
  console.log('Creating task', req.body);
};

export const updateTask = (req, res) => {
  console.log(`Updating task with id ${req.params.id}`, req.body);
};

export const deleteTask = (req, res) => {
  console.log(`Deleting task with id ${req.params.id}`);
};
