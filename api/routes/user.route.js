import express from "express";
import { logOut, loginUser, registerUser, getUser } from "../controllers/user.controller.js";
const router = express.Router();
router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/logout", logOut)
router.get("/user/:id", getUser)

export default router;