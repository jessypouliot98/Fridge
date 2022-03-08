import express from 'express';
import * as userController from "../../../controllers/user/user";

const router = express.Router();

router.get('/auth', userController.getAuthUser);

export default router;
