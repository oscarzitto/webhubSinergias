import { instituciones } from "../data/instituciones";
import "../styles/avances.css";

export default function Avances() {
  return (
    <div className="avances-container">

      <h1>Avances Generales</h1>

      {instituciones.map((institucion) => (
        <div
          key={institucion.id}
          className="avance-card"
        >

          <h3>{institucion.nombre}</h3>

          <p>
            Estado: {institucion.estado}
          </p>

          <div className="progress-bar">

            <div
              className="progress-fill"
              style={{
                width: `${institucion.avance}%`
              }}
            />

          </div>

          <p>{institucion.avance}%</p>

        </div>
      ))}

    </div>
  );
}