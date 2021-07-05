const { request, response } = require("express");
const Usuario = require("../models/Usuario");

const login = (req = request, res = response) => {
  res.json({
    msg: "Login post",
  });
};

const register = async (req = request, res = response) => {
  const { nombre, email, password } = req.body;

  try {
    // const usuario = new Usuario({ nombre, email, password });
    const usuario = Usuario.build({ nombre, email, password });
    await usuario.save();

    res.json({
      usuario,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Hable con el administrador",
    });
  }
};

module.exports = {
  login,
  register,
};
