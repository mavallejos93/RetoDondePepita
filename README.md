# RetoDondePepita

usuario = {
  nombres: String
  apellidos: String
  edad: Number
  correo: String
  pass: String
  rol: String
}

producto{
  nombre: String
  descripcion: String
  precioCompra: Number
  }

stock = {
  idProducto: _id "producto"
  cantidad: Number
  }
