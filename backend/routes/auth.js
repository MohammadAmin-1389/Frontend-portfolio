import express from "express";
import bcrypt from "bcrypt";
import { body } from "express-validator";
import { User } from "../models/user.js";
import { validate } from "../middleware/validate.js";
import { createToken, publicUser } from "../utils/user.js";

const router = express.Router();

const signupRules = [
  body("username")
    .isString().withMessage("Username must be a string")
    .trim()
    .isLength({ min: 3, max: 20 }).withMessage("Username must be 3 to 20 characters"),
  body("email")
    .isString().withMessage("Email must be a string")
    .trim()
    .toLowerCase()
    .isEmail().withMessage("Email is not valid"),
  body("phone")
    .isString().withMessage("Phone must be a string")
    .trim()
    .isMobilePhone("any").withMessage("Phone number is not valid"),
  body("password")
    .isString().withMessage("Password must be a string")
    .isLength({ min: 6, max: 64 }).withMessage("Password must be 6 to 64 characters"),
];

const loginRules = [
  body("email")
    .isString().withMessage("Email must be a string")
    .trim()
    .toLowerCase()
    .isEmail().withMessage("Email is not valid"),
  body("password").isString().notEmpty().withMessage("Password is required"),
];

// POST /api/auth/signup
router.post("/signup", signupRules, validate, async (req, res) => {
  try {
    const { username, email, phone, password } = req.body;

    const exists = await User.findOne({ $or: [{ email }, { username }, { phone }] });
    if (exists) {
      const field =
        exists.email === email ? "Email" : exists.username === username ? "Username" : "Phone";
      return res.status(409).json({ message: `${field} is already registered` });
    }

    const hashed = await bcrypt.hash(password, 10);
    const user = await User.create({ username, email, phone, password: hashed });

    res.status(201).json({ token: createToken(user), user: publicUser(user) });
  } catch (err) {
    if (err.code === 11000) {
      return res.status(409).json({ message: "User already exists" });
    }
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

// POST /api/auth/login
router.post("/login", loginRules, validate, async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    const valid = user && (await bcrypt.compare(password, user.password));

    // Same message for "no such email" and "wrong password" on purpose
    if (!valid) {
      return res.status(401).json({ message: "Email or password is incorrect" });
    }

    res.json({ token: createToken(user), user: publicUser(user) });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
