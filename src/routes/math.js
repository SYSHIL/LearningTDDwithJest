// Define a route
const express = require("express");
const router = new express.Router();
const mathController = require("../controllers/mathController")

router.get('/:num1/:num2', mathController.addNumbers)

module.exports = router