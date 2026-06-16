import { instituciones } from "../data/instituciones";
import "../styles/participantes.css";

export default function Participantes() {
  return (
    <div className="participantes-container">

      <h1>Instituciones Participantes</h1>

      <div className="participantes-grid">

        {instituciones.map((institucion) => (
          <div
            key={institucion.id}
            className="participante-card"
          >
            <h3>{institucion.nombre}</h3>

            <p>
              <strong>Tipo:</strong> {institucion.tipo}
            </p>

            <p>
              <strong>Ubicación:</strong>{" "}
              {institucion.comuna}, {institucion.region}
            </p>

            <p>
              <strong>Estado:</strong>{" "}
              {institucion.estado}
            </p>

            <p>
              <strong>Avance:</strong>{" "}
              {institucion.avance}%
            </p>

          </div>
        ))}

      </div>

    </div>
  );
}