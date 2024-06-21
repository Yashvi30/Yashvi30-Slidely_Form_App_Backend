import { Router } from "express";
import { submit } from "../controllers/submitController";

const router = Router();

router.post("/", submit);

export default router;
