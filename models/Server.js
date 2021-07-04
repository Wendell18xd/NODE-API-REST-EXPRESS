const express = require("express"); //importar la libreria
const cors = require("cors");

const authRouter = require("../routes/auth");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;

    this.patch = {
      auth: "/api/auth",
      usuario: "/api/usuarios",
      mensajes: "/api/mensajes",
    };

    //Middlewares
    this.middlewares();

    //Rutas de mi aplicacion
    this.routes();
  }

  middlewares() {
    //CORS
    this.app.use(cors());

    //Lectura y parseo del body
    this.app.use(express.json());

    //Directorio publico
    this.app.use(express.static("public"));
  }

  routes() {
    this.app.use(this.patch.auth, authRouter);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("server run in port: ", this.port);
    });
  }
}

module.exports = Server;
