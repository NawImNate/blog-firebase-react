import express from "express";
import { getAllUser, signup } from "../controllers/user-controller";

const router = express.Router();

// Requests, define route as first param, and controller function as second param
router.get("/", getAllUser);
router.post("/signup", signup);

export default router;
