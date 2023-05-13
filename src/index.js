const express = require("express");
const app = express();
const cors = require("cors");

const mongoose = require("mongoose");
const estudianteRoutes = require("./routes/estudiantes");

const port = process.env.PORT || 9000;

//MIDDLEWARES
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);
app.use(express.json());
app.use("/api", estudianteRoutes);

// RUTAS
app.get("/", (req, res) => {
  res.send("API FUNCIONANDO EN EL MAIN");
});

//conexion a MongoDB
mongoose
  .connect(
    "mongodb+srv://CristopherPaiz:pruebadeapirest@pruebas.4w9gmlt.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("Conectado a la BD de Mongo Atlas"))
  .catch((err) => console.log("Hubo un error: ", err));

app.listen(port, () => console.log("Server en", port));
