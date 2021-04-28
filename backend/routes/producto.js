let express = require("express");

let Producto = require("../controllers/producto");

let api = express.Router();

api.post("/producto/registrarProducto", Producto.registrarProducto);
api.get("/producto/:nombre?", Producto.listarProducto);
api.post("/producto/:nombre?", Producto.listarProducto);
api.put("/producto/editarProducto/:id", Producto.editarProducto);
api.delete("/producto/eliminarProducto/:id", Producto.eliminarProducto);

module.exports = api;