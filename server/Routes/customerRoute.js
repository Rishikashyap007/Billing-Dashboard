const express = require("express");
const route = express.Router();
const {createCustomer,getcustomers,getcustomerbyId} = require("../Controllers/customerControllers.js");

// Middleware to parse JSON bodies
route.use(express.json());

route.post("/", createCustomer)
.get('/',getcustomers)
.get('/:id',getcustomerbyId)

module.exports = route;
