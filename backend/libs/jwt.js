let jwt = require("jwt-simple");
let moment = require("moment");
let secret = "p3pit4";

exports.createToken = function (usuario) {
    let pyload = {
        _id: usuario._id,
        nombres: usuario.nombres,
        apellidos: usuario.apellidos,
        edad: usuario.edad,
        correo: usuario.correo,
        iat: moment().unix(),
        //exp: moment.add(30 "days") 
    }
    return jwt.encode(pyload, secret);
}
