import express from "express";
import { User } from "../models/user.js";
import { auth } from "../middleware/auth.js";
import { publicUser } from "../utils/user.js";

const router = express.Router();

// GET /api/users/me  -> the logged-in user (used to restore the session on refresh)
router.get("/me", auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(401).json({ message: "Account no longer exists" });
    }
    res.json({ user: publicUser(user) });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

// DELETE /api/users/me  -> delete my own account
router.delete("/me", auth, async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.user.id);
    if (!user) {
      return res.status(404).json({ message: "Account not found" });
    }
    res.json({ message: "Account deleted" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
