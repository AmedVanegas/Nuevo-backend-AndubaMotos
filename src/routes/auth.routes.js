import { Router } from "express";
import { createUsers } from "../controllers/user.controller.js";
import { loginUser } from "../controllers/auth.controller.js";

const router = Router() //(para usuarios)

// /login

router.post('/login', loginUser)

// /register

router.post('/register', createUsers) // /api/auth/register

// /remember-password

// /remember-user

// /renew-token

// /activate-account

// /deactivate-account

// /double-athuentication



export default router