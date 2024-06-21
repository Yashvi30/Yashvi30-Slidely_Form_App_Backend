import { Router } from "express";
import { read } from "../controllers/readController";

const router = Router();

router.get("/", read);

export default router;
