import express from "express";
import { register, login } from "../controllers/auth.controller.js";

const router = express.Router();

router.get("/debug", (req, res) => {
  res.send("AUTH ROUTES ARE LOADED");
});

router.post("/register", register);
router.post("/login", login);

export default router;
