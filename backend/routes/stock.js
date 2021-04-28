let express = require("express");

let Stock = require("../controllers/stock");

let api = express.Router();

api.post("/stock/registrarStock", Stock.registrarStock);

module.exports = api;