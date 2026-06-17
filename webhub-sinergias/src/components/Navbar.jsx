import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import "../styles/navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">

      <Link to="/" className="navbar-logo">
        <img
          src={logo}
          alt="SINERGIAS"
        />
      </Link>

      <div className="navbar-links">

        <Link to="/">Inicio</Link>

        <Link to="/participantes">
          Instituciones Participantes
        </Link>

        <Link to="/avances">
          Avances
        </Link>

        <Link to="/recursos">
          Recursos
        </Link>

        <Link to="/contacto">
          Contacto
        </Link>

        <Link to="/login">
          Login - Acceso Privado
        </Link>

      </div>

    </nav>
  );
}