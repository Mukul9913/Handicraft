import express from "express";
import { SignIn, SignUp } from "../controller/customer.controller.js";
import { body } from "express-validator";
import { getProductByCategory, getProductByPk, list, search, searchByKeyword } from "../controller/product.controller.js";


const router = express.Router();
router.post("/signin", SignIn)
router.post("/signup",
    body("name").notEmpty(),
    body("email", "Not valid email Id").isEmail(),
    body("password", "Please enter password").notEmpty(),
    body("contact", "Only digit is allowed").isNumeric(),
    body("password", "password must have 5 latter at least").isLength({ min: 5 }),
    SignUp);
router.get("/list", list);
router.get("/getProducts/:categoryName", getProductByCategory);
router.get("/getProductlist/:id", getProductByPk);
router.post("/search/:letter", search);
router.post("/searchKeyword/:keyword", searchByKeyword);
export default router;
