import { Router } from "express";
import UserRouter from "../../modules/users/users.routes";
import AuthRouter from "../../modules/auth/auth.routes";
import bookRoutes from "../../modules/books/book.route";

const router = Router();


router.use('/books', bookRoutes);
router.use('/auth', AuthRouter);
router.use('/users', UserRouter);

export default router;

const express = require('express');
const cors = require('cors'); 
const app = express();

app.use(cors()); 
app.use(express.json());

