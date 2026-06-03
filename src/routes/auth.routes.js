import { Router } from "express";
import { createUsers } from "../controllers/user.controller.js";

const router = Router() //(para usuarios)

// /login

// /register

router.post('/register', createUsers) // /api/auth/register

// /remember-password

// /remember-user

// /renew-token

// /activate-account

// /deactivate-account

// /double-athuentication



export default router