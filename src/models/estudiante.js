const mongoose = require("mongoose");

const estudianteSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  apellido: {
    type: String,
    required: true,
  },
  fechanac: {
    type: Date,
    required: true,
  },
  carrera: {
    type: String,
    required: true,
  },
  promedio: {
    type: Number,
    required: true,
  },
});

const estudiante = mongoose.model("estudiantes", estudianteSchema);

module.exports = estudiante;
