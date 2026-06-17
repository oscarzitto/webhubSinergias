import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function MapaInstitucionesDemo() {
  return (
    <MapContainer
      center={[-41.47, -72.94]}
      zoom={8}
      style={{
        height: "400px",
        width: "100%",
        borderRadius: "12px"
      }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Marker position={[-41.47, -72.94]}>
        <Popup>
          Universidad de Los Lagos
        </Popup>
      </Marker>

      <Marker position={[-41.32, -72.98]}>
        <Popup>
          Municipalidad de Puerto Varas
        </Popup>
      </Marker>

      <Marker position={[-41.50, -72.32]}>
        <Popup>
          Fundación Patagonia Verde
        </Popup>
      </Marker>

    </MapContainer>
  );
}