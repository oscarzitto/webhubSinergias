import "../styles/home.css";

export default function Home() {
  return (
    <div className="home">

      <section className="hero">
        <h1>Web Hub SINERGIAS</h1>

        <p>
          Plataforma de acceso e integración para iniciativas de
          Desarrollo Sostenible, Turismo Responsable y colaboración
          entre instituciones participantes.
        </p>
      </section>

      <section className="quick-access">

        <div className="card">
          <h2>🌎 GeoDashboard</h2>
          <p>
            Visualización territorial de instituciones e iniciativas.
          </p>
        </div>

        <div className="card">
          <h2>📊 ODS Dashboard</h2>
          <p>
            Seguimiento de avances y procesos de certificación.
          </p>
        </div>

      </section>

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
          <h3>67%</h3>
          <p>Avance Promedio</p>
        </div>

      </section>

    </div>
  );
}