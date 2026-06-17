import { recursos } from "../data/recursos";
import "../styles/recursos.css";

export default function Recursos() {
  return (
    <div className="page-container">

      <h1>Recursos Públicos</h1>

      <div className="recursos-grid">

        {recursos.map((recurso) => (
          <div
            key={recurso.id}
            className="recurso-card"
          >
            <h3>{recurso.titulo}</h3>

            <p>{recurso.descripcion}</p>

            <button>
              Ver Recurso
            </button>

          </div>
        ))}

      </div>

    </div>
  );
}