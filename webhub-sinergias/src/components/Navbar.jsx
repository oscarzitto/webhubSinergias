import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <Link to="/">Inicio</Link> |{" "}
      <Link to="/participantes">Instituciones Participantes</Link> |{" "}
      <Link to="/avances">Avances</Link> |{" "}
      <Link to="/recursos">Recursos</Link> |{" "}
      <Link to="/contacto">Contacto</Link> |{" "}
      <Link to="/login">Login - Acceso Privado</Link>
    </nav>
  );
}