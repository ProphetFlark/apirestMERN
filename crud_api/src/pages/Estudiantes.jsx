import { useEffect, useState } from "react";
import { getEstudiantes } from "../api/estudiante";
import { Link } from "react-router-dom";

const Estudiantes = () => {
  const [estudiantes, setEstudiantes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEstudiantes = async () => {
      try {
        const response = await getEstudiantes();
        setEstudiantes(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchEstudiantes();
  }, []);

  if (loading) {
    return <div>Cargando estudiantes...</div>;
  }

  return (
    <>
      <b style={{ fontSize: "30px", margin: "10px", marginRight: "100px" }}>
        Estudiantes
      </b>
      <button>
        <Link to={"/new"} style={{ color: "#000", textDecoration: "none" }}>
          Añadir nuevo Estudiante
        </Link>
      </button>
      <div style={{ display: "flex" }}>
        {estudiantes.map((estudiante) => (
          <div key={estudiante._id} style={{ margin: "10px" }}>
            <Link
              to={`/estudiante/${estudiante._id}`}
              style={styles.Link}
              state={estudiante}
              key={estudiante._id}
            >
              <div key={estudiante._id} style={styles.card}>
                <h2>
                  {estudiante.nombre} {estudiante.apellido}
                </h2>

                <p>
                  <strong>Fecha de nacimiento:</strong> {estudiante.fechanac}
                </p>
                <p>
                  <strong>Carrera:</strong> {estudiante.carrera}
                </p>
                <p>
                  <strong>Promedio:</strong> {estudiante.promedio}
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

const styles = {
  card: {
    border: "1px solid #ccc",
    borderRadius: 8,
    padding: 16,
    margin: "16px 0",
    backgroundColor: "rgba(0,0,0,0.1)",
    width: "360px",
  },
  Link: {
    textDecoration: "none",
    color: "#000",
    width: "360px",
  },
};

export default Estudiantes;
