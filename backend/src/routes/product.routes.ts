import { Router } from "express";

import {
  createProduct,
  getProductHistory,
} from "../controllers/product.controller";

const router = Router();

router.post("/", createProduct);
router.get("/history", getProductHistory);

export default router;