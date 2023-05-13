import { createEstudianteRequest } from "../api/estudiante";
import { useNavigate } from "react-router-dom";

const NewEstudiante = () => {
  const navigate = useNavigate();
  const handleActualizarDatos = async () => {
    const nombre = await document.getElementsByName("nombre")[0].value;
    const apellido = await document.getElementsByName("apellido")[0].value;
    const fechanac = await document.getElementsByName("fechanac")[0].value;
    const carrera = await document.getElementsByName("carrera")[0].value;
    const promedio = parseFloat(
      await document.getElementsByName("promedio")[0].value
    );

    const newEstudiante = {
      nombre,
      apellido,
      fechanac,
      carrera,
      promedio,
    };

    await createEstudianteRequest(newEstudiante)
      .then(() => {
        confirm("Estudiante Agregado ¿Desea regresar al Inicio?")
          ? navigate("/")
          : null;
      })
      .catch((err) => {
        alert("No se pudo agregar nuevo estudiante " + err.message);
      });
  };

  return (
    <div>
      <h2>Agregar nuevo estudiante:</h2>
      <hr />
      <label>
        Nombre del estudiante<span>: </span>
        <input
          type="text"
          placeholder="Nombre del estudiante"
          name="nombre"
          autoComplete="nope"
        />
      </label>
      <br />
      <br />
      <label>
        Apellido del estudiante<span>: </span>
        <input
          type="text"
          placeholder="Apellido del estudiante"
          name="apellido"
          autoComplete="nope"
        />
      </label>
      <br />
      <br />
      <label>
        Fecha de nacimiento formato (AAAA-MM-DD)<span>: </span>
        <input type="date" placeholder="Fecha de nacimiento" name="fechanac" />
      </label>
      <br />
      <br />
      <label>
        Carrera del estudiante<span>: </span>
        <input
          type="text"
          placeholder="Carrera del estudiante"
          name="carrera"
          autoComplete="nope"
        />
      </label>
      <br />
      <br />
      <label>
        Promedio del estudiante<span>: </span>
        <input
          type="number"
          placeholder="Promedio del estudiante"
          name="promedio"
          autoComplete="nope"
        />
      </label>
      <br />
      <br />
      <button onClick={handleActualizarDatos}>Agregar Nuevo Estudiante</button>
    </div>
  );
};

export default NewEstudiante;
