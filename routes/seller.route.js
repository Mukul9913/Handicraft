import express from "express";
import { deleteProduct, saveProduct, updateProduct, viewAllProduct, viewOrder, viewReview } from "../controller/seller.controller.js";

const router = express.Router();

router.post("/saveproduct", saveProduct);
router.get("/viewallproduct", viewAllProduct);
router.post("/updateproduct", updateProduct);
router.post("/deleteproduct", deleteProduct);
router.get("/vieworder", viewOrder);
router.get("/viewreview", viewReview);

export default router;