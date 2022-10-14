import express from "express";
import { getAllUser } from "../controllers/user-controller";

const router = express.Router();

// Requests, define route, and controller function
router.get("/", getAllUser);

export default router;
