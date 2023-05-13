import { Routes, Route } from "react-router-dom";
import PageEstudiante from "./pages/PageEstudiante";
import Estudiantes from "./pages/Estudiantes";
import NewEstudiante from "./pages/NewEstudiante";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Estudiantes />} />
      <Route path="/new" element={<NewEstudiante />} />
      <Route path="/estudiante/:id" element={<PageEstudiante />} />
    </Routes>
  );
};

export default App;
