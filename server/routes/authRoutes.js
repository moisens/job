import express from "express";
import { register, login, updateUser } from "../controllers/authController.js";
import authenticateUser from "../middleware/authenticate.js";
import rateLimiter from "express-rate-limit";

const apiLimiter = rateLimiter({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10, // Limit each IP to 10 requests per `window` (here, per 15 minutes)
  message: "Too many requests from this IP address, please try again after 15 minutes"
});

const router = express.Router();

router.route("/register").post(apiLimiter, register);
router.route("/login").post(apiLimiter, login);
router.route("/updateUser").patch(authenticateUser, updateUser);

export default router;
