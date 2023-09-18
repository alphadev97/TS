import express, { Router } from "express";
import { getUser } from "../controllers/userController.js";

const router: Router = express.Router();

router.get("/all", getUser);

export default router;
