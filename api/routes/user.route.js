import express from "express";
import { logOut, loginUser, registerUser } from "../controllers/user.controller.js";
const router = express.Router();
router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/logout", logOut)

export default router;