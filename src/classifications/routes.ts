import { Router } from "express"
import { classifyNumberController } from "./controllers/classification.controller"

const router = Router();

router.get("/classify-number", classifyNumberController);

export default router;