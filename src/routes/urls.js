import { Router } from "express";
import { dump, read, create } from "../controllers/urls.js";

const router = Router();

router.get("/", dump);
router.get("/:id", read);
router.post("/", create);

export { router as urls };