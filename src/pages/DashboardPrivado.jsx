import { Link } from "react-router-dom";
import { dashboardData } from "../data/dashboard";
import "../styles/dashboard.css";

export default function DashboardPrivado() {

  return (
    <div className="page-container">

      <h1>Panel Institucional</h1>

      <div className="dashboard-card">

        <h2>{dashboardData.institucion}</h2>

        <p>
          <strong>Estado:</strong> {dashboardData.estado}
        </p>

        <p>
          <strong>Avance General:</strong>
        </p>

        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{
              width: `${dashboardData.avance}%`
            }}
          />
        </div>

        <p>{dashboardData.avance}%</p>

        <p>
          <strong>Evidencias Pendientes:</strong>{" "}
          {dashboardData.evidenciasPendientes}
        </p>

        <h3>Próximos Pasos</h3>

        <ul>
          {dashboardData.proximosPasos.map((paso, index) => (
            <li key={index}>{paso}</li>
          ))}
        </ul>

        <h3>Alertas</h3>

        <ul>
          <li>⚠️ Informe ODS pendiente de carga.</li>
          <li>📅 Próxima revisión: 15 de julio de 2026.</li>
        </ul>

      </div>

      <div className="dashboard-links">

        <Link
          to="/geodashboard"
          className="dashboard-link"
        >
          🌎 GeoDashboard
        </Link>

        <Link
          to="/ods-dashboard"
          className="dashboard-link"
        >
          📊 ODS Dashboard
        </Link>

      </div>

    </div>
  );
}