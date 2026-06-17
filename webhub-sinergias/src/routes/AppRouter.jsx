import { HashRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

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
    <HashRouter>
      <Routes>

        <Route
          path="/"
          element={
            <MainLayout>
              <Home />
            </MainLayout>
          }
        />

        <Route
          path="/destinos-sostenibles"
          element={
            <MainLayout>
              <DestinosSostenibles />
            </MainLayout>
          }
        />


        <Route
          path="/ecosistemas-formativos"
          element={
            <MainLayout>
              <EcosistemasFormativos />
            </MainLayout>
          }
        />
        <Route
          path="/participantes"
          element={
            <MainLayout>
              <Participantes />
            </MainLayout>
          }
        />
        <Route
          path="/mapa-instituciones"
          element={
            <MainLayout>
              <MapaInstituciones />
            </MainLayout>
          }
        />
        <Route
          path="/avances"
          element={
            <MainLayout>
              <Avances />
            </MainLayout>
          }
        />
        <Route
          path="/recursos"
          element={
            <MainLayout>
              <Recursos />
            </MainLayout>
          }
        />
        <Route
          path="/contacto"
          element={
            <MainLayout>
              <Contacto />
            </MainLayout>
          }
        />
        
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<DashboardPrivado />} />
        <Route path="/geodashboard" element={<GeoDashboardDemo />} />
        <Route path="/ods-dashboard" element={<ODSDashboardDemo />} />
      </Routes>
    </HashRouter>
  );
}