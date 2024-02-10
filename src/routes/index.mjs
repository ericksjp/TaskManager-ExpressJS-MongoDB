import { Router } from "express";
import tasksRouter from "./tasks.mjs";

const router = Router();

router.use('/api/v1/tasks', tasksRouter);

export default router;