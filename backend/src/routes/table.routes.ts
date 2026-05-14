import { Router } from "express";

import {
  createTable,
  getTables,
} from "../controllers/table.controller";

const router = Router();

router.post("/", createTable);
router.get("/", getTables);

export default router;