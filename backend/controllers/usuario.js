let Usuario = require("../models/usuario");
let bcrypt = require("bcrypt-nodejs");
let jwt = require("../libs/jwt");

const registrarUsuario = (req, res) => {
    let params = req.body;
    let usuario = new Usuario();

    if (params.nombres && params.apellidos && params.edad && params.correo && params.pass && params.rol) {
        bcrypt.hash(params.pass, null, null, (err, hash) => {
            if (hash) {
                usuario.nombres = params.nombres;
                usuario.apellidos = params.apellidos;
                usuario.edad = params.edad;
                usuario.correo = params.correo;
                usuario.pass = hash;
                usuario.rol = params.rol;
                
                usuario.save((err, saveUsuario ) => {
                    if (err) {
                        res.status(500).send({err: "No se registro usuario"})
                    } else {
                        res.status(200).send({usuario: saveUsuario})
                    }                    
                });
            } 
        });

    } else {
        res.status(405).send({ err: "Faltaron campos por llenar" });
    }
}

const login = (req, res) => {
    let params = req.body;
    Usuario.findOne({ correo: params.correo }, (err, datosUsuario) => {
      if (err) {
        res.status(500).send({ mensaje: "Error del servidor" });
      } else {
        if (datosUsuario) {
          bcrypt.compare(params.pass, datosUsuario.pass, function (err, confirm) {
            if (confirm) {
              if (params.getToken) {
                res.status(200).send({
                  jwt: jwt.createToken(datosUsuario),
                });
              } else {
                res
                  .status(200)
                  .send({ Usuario: datosUsuario, mensaje: "Sin token" });
              }
            } else {
              res.status(401).send({ mensaje: " Correo o password incorrectos" });
            }
          });
        } else {
          res.status(401).send({ mensaje: " Correo o password incorrectos" });
        }
      }
    });
  };
  
module.exports = {
    registrarUsuario,
    login,
}
