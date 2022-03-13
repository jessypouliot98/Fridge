import express from 'express';
import {localeHeaderMiddleware, throttleMiddleware} from "../../middlewares";
import authRouter from './auth/auth';
import userRouter from './user/user';
import recipeRouter from './recipe/recipe';
import * as apiController from "./api/api";

const router = express.Router();

router.use(localeHeaderMiddleware());
router.use(throttleMiddleware());

router.get('/version', apiController.getVersion);

router.use('/auth', authRouter);
router.use('/user', userRouter);
router.use('/recipe', recipeRouter);

export default router;
