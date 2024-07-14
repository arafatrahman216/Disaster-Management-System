import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import iconRetinaUrl from 'leaflet/dist/images/marker-icon-2x.png';
import iconUrl from 'leaflet/dist/images/marker-icon.png';
import shadowUrl from 'leaflet/dist/images/marker-shadow.png';


// Fix the default icon issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl,
    iconUrl,
    shadowUrl
  });
  

const Map = ({locations }) => {
  const defaultPosition  = [23.7266, 90.3927]; // Default position [latitude, longitude]

  return (
    <MapContainer center={defaultPosition} zoom={13} style={{ height: "100vh", width: "100%" }}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {locations.map((location, idx) => (
        <Marker key={idx} position={location.position}>
          <Popup>
            {location.popupText}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

export default Map;
