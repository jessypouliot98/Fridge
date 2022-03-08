import express from 'express';
import * as authController from "../../../controllers/auth/auth";

const router = express.Router();

router.post('/', authController.getBearerToken);

export default router;
