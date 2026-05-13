import { Router } from "express";

import authRoutes from "../../modules/auth/auth.routes";
import reviewRoutes from "../../modules/reviews/reviews.routes";
import bookRoutes from "../../modules/books/book.route";
import usersRoutes from "../../modules/users/users.routes";
import progressRoutes from "../../modules/progress/progress.routes";
import wishlistRoutes from "../../modules/wishlist/wishlist.routes";

const router = Router();

router.use('/auth', authRoutes);
router.use('/reviews', reviewRoutes);
router.use('/books', bookRoutes);
router.use('/users', usersRoutes);
router.use('/progress', progressRoutes);
router.use('/wishlist', wishlistRoutes);

export default router;