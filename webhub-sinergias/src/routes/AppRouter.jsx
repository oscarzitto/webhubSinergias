import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import DestinosSostenibles from "../pages/DestinosSostenibles";
import EcosistemasFormativos from "../pages/EcosistemasFormativos";
import Participantes from "../pages/Participantes";
import MapaInstituciones from "../pages/MapaInstituciones";
import Avances from "../pages/Avances";
import Recursos from "../pages/Recursos";
import Contacto from "../pages/Contacto";
import Login from "../pages/Login";
import DashboardPrivado from "../pages/DashboardPrivado";
import GeoDashboardDemo from "../pages/GeoDashboardDemo";
import ODSDashboardDemo from "../pages/ODSDashboardDemo";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destinos-sostenibles" element={<DestinosSostenibles />} />
        <Route path="/ecosistemas-formativos" element={<EcosistemasFormativos />} />
        <Route path="/participantes" element={<Participantes />} />
        <Route path="/mapa-instituciones" element={<MapaInstituciones />} />
        <Route path="/avances" element={<Avances />} />
        <Route path="/recursos" element={<Recursos />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<DashboardPrivado />} />
        <Route path="/geodashboard" element={<GeoDashboardDemo />} />
        <Route path="/ods-dashboard" element={<ODSDashboardDemo />} />
      </Routes>
    </BrowserRouter>
  );
}