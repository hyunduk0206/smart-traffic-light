import express from "express";
import controllers from "../controllers/controllers";

const router = express.Router();

router.get("/", controllers.index);

router.get("/test", controllers.getTest);
router.post("/test", controllers.postTest);

export default router;
