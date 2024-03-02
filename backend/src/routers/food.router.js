import { Router } from "express";
import { sample_foods, sample_tags } from "../data.js";

const router = Router();

router.get("/", (req, res) => {
  res.send(sample_foods);
});

router.get("/tags", (req, res) => {
  res.send(sample_tags);
});

export default router;
