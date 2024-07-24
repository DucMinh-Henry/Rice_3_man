const express = require("express");
const productRoute = require("./product.route.js");
const brandRoute = require("./brand.route.js");
const typeRoute = require("./productType.route.js");
const invoiceRoute = require("./invoice.route.js");
const postRoute = require("./post.route.js");
const conatctRoute = require("./contact.route.js");
const imageRoute = require("./image.route.js");
const invoiceDetails = require("./invoicedetail.route.js");
const userRoute = require("./user.route.js");
const authRoute = require("./auth.route.js");

const router = express.Router();

//Product
router.use("/product", productRoute);
//Brand
router.use("/brand", brandRoute);
//Type
router.use("/type", typeRoute);
//Invoice
router.use("/invoice", invoiceRoute);
//invoicedetail
router.use("/invoicedetail", invoiceDetails);
//Post
router.use("/post", postRoute);
//Contact
router.use("/contact", conatctRoute);
//Image
router.use("/image", imageRoute);
//auth
router.use("/", authRoute);
//user
router.use("/user", userRoute);

module.exports = router;
