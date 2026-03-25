import { Router } from "express";
import UserRouter from "../../modules/users/users.routes";
import AuthRouter from "../../modules/auth/auth.routes";

const router = Router();


router.use('/auth', AuthRouter);
router.use('/users', UserRouter);

export default router;