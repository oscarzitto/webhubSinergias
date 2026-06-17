import "../styles/footer.css";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-content">

        <div className="footer-brand">
          <h3>SINERGIAS</h3>

          <p>
            Plataforma Web Hub para la visualización,
            articulación y seguimiento de iniciativas
            de Desarrollo Sostenible y Turismo Responsable.
          </p>
        </div>

        <div className="footer-links">
          <h4>Accesos</h4>

          <ul>
            <li>Inicio</li>
            <li>Participantes</li>
            <li>Avances</li>
            <li>Recursos</li>
          </ul>
        </div>

        <div className="footer-info">
          <h4>ODS</h4>

          <p>
            Impulsando alianzas, sostenibilidad y
            resiliencia climática mediante la
            colaboración entre instituciones,
            comunidades y academia.
          </p>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 Web Hub SINERGIAS MVP — Proyecto Académico
      </div>

    </footer>
  );
}