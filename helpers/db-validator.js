const Usuario = require("../models/Usuario");

const emailExiste = async (email) => {
  const existeEmail = await Usuario.findOne({
    where: {
      email,
    },
  });
  if (existeEmail) {
    throw new Error("El correo " + email + " ya existe");
  }
};

module.exports = {
  emailExiste,
};
