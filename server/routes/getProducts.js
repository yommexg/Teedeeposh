const express = require("express");
const router = express.Router();

const productsController = require("../controllers/productsController");

router.get("/", productsController.handleGetAllProducts);

module.exports = router;
