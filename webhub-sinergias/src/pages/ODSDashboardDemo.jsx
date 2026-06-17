import { odsData } from "../data/ods";
import "../styles/odsdashboard.css";

export default function ODSDashboardDemo() {
  return (
    <div className="ods-container">

      <h1>ODS Dashboard</h1>

      <p>
        Seguimiento general de indicadores asociados
        al proceso de sostenibilidad turística.
      </p>

      <div className="ods-grid">

        {odsData.map((ods) => (
          <div
            key={ods.id}
            className="ods-card"
          >

            <h2>ODS {ods.id}</h2>

            <p>{ods.nombre}</p>

            <div className="ods-progress">

              <div
                className="ods-fill"
                style={{
                  width: `${ods.avance}%`
                }}
              />

            </div>

            <p>{ods.avance}%</p>

          </div>
        ))}

      </div>

    </div>
  );
}