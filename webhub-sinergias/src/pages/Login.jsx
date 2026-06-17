import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "../styles/login.css";

export default function Login() {

  const navigate = useNavigate();

  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (
      usuario === "institucion" &&
      password === "1234"
    ) {
      navigate("/dashboard");
    } else {
      setError("Credenciales incorrectas");
    }
  };

  return (
    <div className="login-container">

      <h1>Inicio de Sesión</h1>
      <h4>Acceso privado de instituciones ⚠️</h4>

      <form onSubmit={handleLogin}>

        <input
          type="text"
          placeholder="Usuario"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
        />

        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">
          Ingresar
        </button>

      </form>

      {error && (
        <p className="error">
          {error}
        </p>
      )}

      <p>
        Usuario demo: institucion
      </p>

      <p>
        Contraseña demo: 1234
      </p>

    </div>
  );
}