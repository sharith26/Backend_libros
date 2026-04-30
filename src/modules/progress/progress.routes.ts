import { Router } from "express";
import { ProgressController } from "./progress.controller";

const router = Router();
const controller = new ProgressController();

router.post('/', controller.update);
router.get('/:userId', controller.getByUserId);

export default router;