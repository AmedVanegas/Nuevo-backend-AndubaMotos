import { Router } from "express";
import { createUsers } from "../controllers/user.controller.js";
import { loginUser, renewToken } from "../controllers/auth.controller.js";
import authenticationUser from "../middlewares/authentication.middleware.js";

const router = Router() //(para usuarios)

// /login

router.post('/login', loginUser)

// /register

router.post('/register', createUsers) // /api/auth/register

// /renew-token

router.get('/renew-token', authenticationUser ,renewToken)

// /remember-password

// /remember-user

// /renew-token

// /activate-account

// /deactivate-account

// /double-athuentication



export default router