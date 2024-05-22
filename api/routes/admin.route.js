import express from "express";
import { verifyAdminToken } from "../middleware/isAdmin.js";
import { adminLogin } from "../controllers/admin.controller.js";

const adminRouter = express.Router();

adminRouter.post("/signin", adminLogin);

export default adminRouter;
