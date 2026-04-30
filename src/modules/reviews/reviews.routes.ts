import { Router } from "express";
import { ReviewController } from "./reviews.controller";

const router = Router();
const controller = new ReviewController();

router.post('/', controller.create);
router.get('/book/:bookId', controller.getByBook);

export default router;