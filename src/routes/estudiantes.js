const express = require("express");
const router = express.Router();

const estudianteSchema = require("../models/estudiante");

//creamos el metodo post que recibe al usuario y lo guarda
router.post("/estudiante", (req, res) => {
  const estudiante = estudianteSchema(req.body);
  estudiante
    .save()
    .then((data) => res.json(data))
    .catch((err) => res.json({ message: err }));
});

//obtener todos los usuarios
router.get("/estudiante", (req, res) => {
  estudianteSchema
    .find()
    .then((data) => res.json(data))
    .catch((err) => res.json({ message: err }));
});

//Obtener estudiante por ID
router.get("/estudiante/:id", (req, res) => {
  const { id } = req.params;
  estudianteSchema
    .findById({ _id: id })
    .then((data) => res.json(data))
    .catch((err) => res.json({ message: err }));
});

// Actualizar datos del estudiante por ID
router.put("/estudiante/update/:id", (req, res) => {
  const { id } = req.params;
  const { nombre, apellido, fechanac, carrera, promedio } = req.body;

  estudianteSchema
    .findByIdAndUpdate(
      id,
      { nombre, apellido, fechanac, carrera, promedio },
      { new: true }
    )
    .then((data) => res.json(data))
    .catch((err) => res.json({ message: err }));
});

module.exports = router;
