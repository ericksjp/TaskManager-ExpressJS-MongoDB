import { Router } from "express";
import { getAllTasks, createTask, getTask, updateTask, deleteTask } from "../controllers/tasks.mjs";
import { validateBodyProperties } from "../middlewares/validations.mjs";

const router = Router();

router.get('/', getAllTasks);
router.post('/', createTask);
router.get('/:id', getTask);
router.put('/:id', validateBodyProperties(['name', 'completed']), updateTask);
router.patch('/:id', updateTask);
router.delete('/:id', deleteTask);

export default router;

// router.get(/api/v1/tasks)
// router.post(/api/v1/tasks)
// router.get(/api/v1/tasks/:id)
// router.put(/api/v1/tasks/:id)
// router.delete(/api/v1/tasks/:id)
