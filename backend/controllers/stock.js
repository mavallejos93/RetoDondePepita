let Stock = require("../models/stock");

const registrarStock = (req, res) => {
  let params = req.body;

  let stock = new Stock();

  stock.idCategoria = params.idCategoria;
  stock.cantidad = params.cantidad;

  stock.save((err, saveProducto) => {

    if (err) {
        res.status(500).send({mensaje: "ERROR SERVIDOR"});
    } else {
        if (saveProducto) {
            res.status(200).send({categoria: saveProducto})
        } else {
            res.status(401).send({mensaje: "no se pudo registrar categoria"})
        }
    }
})
};

module.exports = {
    registrarStock,
  };