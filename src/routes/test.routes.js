import express from "express";
import User from "../models/user.js";

const router = express.Router();

// test route
router.get("/test-db", async (req, res) => {
  try {
    const user = await User.create({
      name: "Test User",
      email: "test@gmail.com",
      password: "123456",
    });

    const users = await User.find();

    res.json({
      message: "DB working",
      createdUser: user,
      allUsers: users,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
