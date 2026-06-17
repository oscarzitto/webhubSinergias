import { Link } from "react-router-dom";
import "../styles/home.css";

export default function Home() {
  return (<div className="home">

    {/* HERO */}

    <section className="hero">
      <h1>Web Hub SINERGIAS</h1>

      <p>
        Plataforma integradora para la visualización,
        seguimiento y articulación de iniciativas de
        Desarrollo Sostenible y Turismo Responsable.
      </p>

      <p>
        Conectando instituciones, territorios y actores
        comprometidos con los Objetivos de Desarrollo
        Sostenible (ODS).
      </p>
    </section>

    {/* ACCESOS PRINCIPALES */}

    <section className="quick-access">

      <Link to="/geodashboard" className="card-link">
        <div className="card">
          <h2>🌎 GeoDashboard</h2>

          <p>
            Visualización territorial de instituciones,
            actores y avances generales.
          </p>
        </div>
      </Link>

      <Link to="/ods-dashboard" className="card-link">
        <div className="card">
          <h2>📊 ODS Dashboard</h2>

          <p>
            Seguimiento de procesos, indicadores y
            avances asociados a los ODS.
          </p>
        </div>
      </Link>

    </section>

    {/* SINERGIAS */}

    <section className="info-section">

      <h2>¿Qué es SINERGIAS?</h2>

      <p>
        SINERGIAS para el Desarrollo Sostenible es una
        organización sudamericana que promueve la
        colaboración entre comunidades, instituciones
        públicas, empresas, academia y organizaciones
        sociales para impulsar soluciones sostenibles.
      </p>

      <p>
        Su trabajo se basa en el enfoque ecosistémico,
        la resiliencia climática, la ciencia ciudadana
        y la construcción de alianzas para contribuir
        al cumplimiento de los Objetivos de Desarrollo
        Sostenible.
      </p>

    </section>

    {/* INICIATIVAS */}

    <section className="initiatives">

      <div className="initiative-card">

        <h2>Destinos Sostenibles</h2>

        <p>
          Iniciativa orientada a fortalecer procesos de
          Turismo Responsable mediante herramientas de
          monitoreo, articulación institucional y
          seguimiento de avances asociados a los ODS.
        </p>

        <Link
          to="/destinos-sostenibles"
          className="btn-secondary"
        >
          Conocer más
        </Link>

      </div>

      <div className="initiative-card">

        <h2>Ecosistemas Formativos para Destinos Sostenibles</h2>

        <p>
          Busca fortalecer la participación de
          instituciones educativas en la formación de
          capacidades para la sostenibilidad,
          conectando aprendizaje, innovación y
          desarrollo territorial.
        </p>

        <Link
          to="/ecosistemas-formativos"
          className="btn-secondary"
        >
          Conocer más
        </Link>

      </div>

    </section>

    {/* ECOSISTEMA DIGITAL */}

    <section className="integration-section">

      <h2>Ecosistema Digital de las Iniciativas</h2>

      <div className="integration-flow">

        <div className="flow-card">
          <h3>GeoDashboard</h3>
          <p>
            Registro territorial y visualización de
            instituciones participantes.
          </p>
        </div>

        <div className="flow-card">
          <h3>ODS Dashboard</h3>
          <p>
            Seguimiento de procesos, evidencias y
            avances de certificación.
          </p>
        </div>

        <div className="flow-card">
          <h3>Web Hub SINERGIAS</h3>
          <p>
            Acceso centralizado, comunicación y
            visualización pública de resultados.
          </p>
        </div>

      </div>

    </section>

    {/* INDICADORES */}

    <section className="stats">

      <div className="stat">
        <h3>12</h3>
        <p>Instituciones Participantes</p>
      </div>

      <div className="stat">
        <h3>8</h3>
        <p>Comunas Vinculadas</p>
      </div>

      <div className="stat">
        <h3>2</h3>
        <p>Iniciativas Activas</p>
      </div>

      <div className="stat">
        <h3>17</h3>
        <p>ODS Considerados</p>
      </div>

    </section>

  </div>
  );
}