import express from "express";
import bodyParser from "body-parser";
import SellerRouter from "./routes/seller.route.js";
import customerRouter from "./routes/customer.route.js";
import adminRouter from "./routes/admin.route.js"


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/seller", SellerRouter);
app.use("/customer", customerRouter);
app.use("/admin", adminRouter)



app.listen(5000, () => {
    console.log("Server stared..");
})