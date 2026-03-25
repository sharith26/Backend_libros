import { Router } from "express";
import { AuthController } from "./auth.controller";


const router = Router();
const _AuthController = new AuthController();

router.post('/register',_AuthController.register);
router.get('/login',_AuthController.login);

export default router;