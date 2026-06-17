import { instituciones } from "../data/instituciones";
import "../styles/geodashboard.css";
import MapaInstitucionesDemo from "../components/MapaInstitucionesDemo";

export default function GeoDashboardDemo() {
  return (
    <div className="page-container">

      <h1>GeoDashboard</h1>

      <div className="geo-banner">

        <h2>Visualización Territorial</h2>

        <p>
          Este módulo permite visualizar instituciones
          participantes, su ubicación geográfica y el
          estado general de avance de las iniciativas.
        </p>

      </div>

      {/* MAPA */}

      <MapaInstitucionesDemo />

      {/* TARJETAS */}

      <div className="geo-grid">

        {instituciones.map((institucion) => (
          <div
            key={institucion.id}
            className="geo-card"
          >
            <h3>{institucion.nombre}</h3>

            <p>
              {institucion.comuna},{" "}
              {institucion.region}
            </p>

            <p>
              Estado: {institucion.estado}
            </p>

            <p>
              Avance: {institucion.avance}%
            </p>

          </div>
        ))}

      </div>

    </div>
  );
}