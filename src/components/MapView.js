// MapView.js

import React from 'react';
import { useLocation } from 'react-router-dom';
import {
  MapContainer, TileLayer, Marker, Popup,
} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const MapView = () => {
  const location = useLocation();
  const { state } = location;

  return (
    <div style={{ width: '100%', height: '400px' }}>
      <MapContainer center={[0, 0]} zoom={2} style={{ width: '100%', height: '100%' }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        <Marker
          key={state.id}
          position={[state.latitude, state.longitude]}
        >
          <Popup>
            <div>
              <h3>{state.name}</h3>
              <p>
                Phone:
                {state.phoneNumber}
              </p>
              <p>
                Email:
                {state.email}
              </p>
              <p>
                Address:
                {state.addresses[0]}
              </p>
            </div>
          </Popup>
        </Marker>

      </MapContainer>
    </div>
  );
};

export default MapView;
