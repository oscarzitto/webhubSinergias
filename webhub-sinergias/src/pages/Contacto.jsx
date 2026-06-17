import { useState } from "react";
import "../styles/contacto.css";

export default function Contacto() {
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setEnviado(true);
  };

  return (
    <div className="contacto-container">

      <h1>Solicita Información</h1>
      <h3>Formulario de Contacto</h3>

      <p>
        Completa el formulario para conocer más sobre las
        iniciativas de Desarrollo Sostenible y Turismo Responsable.
      </p>

      <form
        className="contacto-form"
        onSubmit={handleSubmit}
      >

        <input
          type="text"
          placeholder="Nombre de la institución"
          required
        />

        <input
          type="email"
          placeholder="Correo electrónico"
          required
        />

        <select required>
          <option value="">
            Seleccione iniciativa
          </option>

          <option>
            Destinos Sostenibles
          </option>

          <option>
            Ecosistemas Formativos
          </option>
        </select>

        <textarea
          rows="5"
          placeholder="Mensaje"
          required
        />

        <button type="submit">
          Enviar Solicitud
        </button>

      </form>

      {enviado && (
        <p className="success-message">
          Solicitud enviada correctamente.
        </p>
      )}

    </div>
  );
}