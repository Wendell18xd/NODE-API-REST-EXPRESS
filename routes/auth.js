const { Router } = require("express");
const { check } = require("express-validator");
const { login, register } = require("../controllers/auth");

const { emailExiste } = require("../helpers/db-validator");
const { validarCampos } = require("../middlewares/validar-campos");

const router = Router();

router.post("/login", login);

router.post(
  "/register",
  [
    check("nombre", "El nombre es obligatorio").notEmpty(),
    check("email", "Email incorrecto").isEmail(),
    check("email").custom(emailExiste),
    check("password", "El password debe ser minimo 6 caracteres").isLength({
      min: 6,
    }),
    check("password", "El password es obligatorio").notEmpty(),
    validarCampos,
  ],
  register
);

module.exports = router;
