let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let productoSchema = Schema({
  nombre: String,
  descripcion: String,
  precioCompra: Number,
  });

module.exports = mongoose.model("producto", productoSchema);