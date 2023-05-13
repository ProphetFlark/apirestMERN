import axios from "axios";
axios.defaults.baseURL = "http://localhost:9000";

//aqui mandamos por post al estudiante
export const createEstudianteRequest = async (estudiante) =>
  await axios.post("api/estudiante", estudiante);

//obtenemos todas los usuarios
export const getEstudiantes = async () => await axios.get("api/estudiante");

//Actualizamos datos del estudiante
export const addUpdateRequest = async (id, datosEstudiante) => {
  await axios.put(`api/estudiante/update/${id}`, datosEstudiante);
};
