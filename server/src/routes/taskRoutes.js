import express from 'express';
import {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
} from '../controllers/taskController.js';
import { validate } from '../middlewares/validate.js';
import {
  createTaskSchema,
  updateTaskSchema,
} from '../validators/taskValidator.js';

const router = express.Router();

router.route('/').get(getAllTasks).post(validate(createTaskSchema), createTask);
router
  .route('/:id')
  .get(getTaskById)
  .put(validate(updateTaskSchema), updateTask)
  .delete(deleteTask);

export default router;
