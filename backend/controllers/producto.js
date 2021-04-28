let Producto = require("../models/producto");

const registrarProducto = (req, res) => {
  let params = req.body;

  let producto = new Producto();

  if (params.nombre && params.descripcion && params.precioCompra) {
    producto.nombre = params.nombre;
    producto.descripcion = params.descripcion;
    producto.precioCompra = params.precioCompra;

    producto.save((err, datosProducto) => {
      if (err) {
        res.status(500).send({ mensaje: "Error al conectar al servidor" });
      } else {
        if (datosProducto) {
          res.status(200).send({ producto: datosProducto });
        } else {
          res.status(401).send({ mensaje: "No se pudo registrar el curso" });
        }
      }
    });
  } else {
    res.status(401).send({ mensaje: "Falto alguno de los campos" });
  }
};

const listarProducto = (req, res) => {
  let nombre = req.params["nombre"];

  Producto.find({ nombre: new RegExp(nombre, "i") }, (err, datosProducto) => {
    if (err) {
      res.status(500).send({ mensaje: "Error al conectar al servidor" });
    } else {
      if (datosProducto) {
        res.status(200).send({ categoria: datosProducto });
      } else {
        res.status(401).send({ mensaje: "No hay categorias" });
      }
    }
  });
};

const editarProducto = (req, res) => {

    let id = req.params["id"]
    let params = req.body;

    Producto.findByIdAndUpdate({_id: id},{nombre: params.nombre, descripcion: params.descripcion, precioCompra: params.precioCompra},(err, datosProducto) => {
      if (err) {
          res.status(500).send({ mensaje: "Error al conectar al servidor" });
        } else {
          if (datosProducto) {
            res.status(200).send({ categoria: datosProducto });
          } else {
            res.status(401).send({ mensaje: "No hay categorias" });
          }
        }
    })
};

const eliminarProducto = (req, res) => {

    let id = req.params["id"];

    Producto.findByIdAndDelete({_id: id},(err, datosProducto) => {
      if (err) {
          res.status(500).send({ mensaje: "Error al conectar al servidor" });
        } else {
          if (datosProducto) {
            res.status(200).send({ categoria: datosProducto });
          } else {
            res.status(401).send({ mensaje: "La categoria no se pudo eliminar" });
          }
        }
    });
};

module.exports = {
  registrarProducto,
  listarProducto,
  editarProducto,
  eliminarProducto,
};
