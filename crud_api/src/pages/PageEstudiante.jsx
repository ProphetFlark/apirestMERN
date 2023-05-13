import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { addUpdateRequest } from "../api/estudiante";
import moment from "moment";

const PageEstudiante = () => {
  const location = useLocation();
  const [estudiante] = useState(location.state);

  const navigate = useNavigate();

  const handleActualizarDatos = async () => {
    const nombre = await document.getElementsByName("nombre")[0].value;
    const apellido = await document.getElementsByName("apellido")[0].value;
    const fechanac = await document.getElementsByName("fechanac")[0].value;
    const carrera = await document.getElementsByName("carrera")[0].value;
    const promedio = parseFloat(
      await document.getElementsByName("promedio")[0].value
    );

    const updatedEstudiante = {
      nombre,
      apellido,
      fechanac,
      carrera,
      promedio,
    };

    await addUpdateRequest(estudiante._id, updatedEstudiante)
      .then(() => {
        confirm("Datos Actualizados ¿Desea regresar al Inicio?")
          ? navigate("/")
          : null;
      })
      .catch((err) => {
        alert("No se pudo actualizar " + err.message);
      });
  };

  return (
    <div>
      <h2>Página del estudiante:</h2>
      <h1>
        {estudiante.nombre} {estudiante.apellido}
      </h1>
      <hr />
      <label>
        Nombre del estudiante<span>: </span>
        <input
          type="text"
          placeholder="Nombre del estudiante"
          name="nombre"
          defaultValue={estudiante.nombre}
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
          defaultValue={estudiante.apellido}
          autoComplete="nope"
        />
      </label>
      <br />
      <br />
      <label>
        Fecha de nacimiento formato (AAAA-MM-DD)<span>: </span>
        <input
          type="date"
          placeholder="Fecha de nacimiento"
          name="fechanac"
          defaultValue={moment(estudiante.fechanac).utc().format("YYYY-MM-DD")}
        />
      </label>
      <br />
      <br />
      <label>
        Carrera del estudiante<span>: </span>
        <input
          type="text"
          placeholder="Carrera del estudiante"
          name="carrera"
          defaultValue={estudiante.carrera}
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
          defaultValue={estudiante.promedio}
          autoComplete="nope"
        />
      </label>
      <br />
      <br />
      <button onClick={handleActualizarDatos}>Actualizar Datos</button>
    </div>
  );
};

export default PageEstudiante;
