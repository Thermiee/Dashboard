// MapView.js

import React from 'react';
import {
  MapContainer, TileLayer, Marker, Popup,
} from 'react-leaflet';
import { useAppContext } from '../AppContext';
import 'leaflet/dist/leaflet.css';

const MapView = () => {
  const { values } = useAppContext();
  const { contacts } = values;

  if (!contacts || (Array.isArray(contacts) && contacts.length === 0)) {
    return (
      <div className="flex justify-center">
        <h1 className="text-3xl text-gray-700">
          No data found, Add From Contact page
        </h1>
      </div>
    );
  }

  return (
    <div style={{ width: '200%', height: '400px' }}>
      <MapContainer center={[0, 0]} zoom={2} style={{ width: '100%', height: '100%' }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {contacts.map((contact) => (
          <Marker
            key={contact.id}
            position={
              [contact.addresses[0].latitude, contact.addresses[0].longitude]
            }
          >

            <Popup>
              <div>
                <h3>{contact.name}</h3>
                <p>
                  Phone:
                  {contact.phoneNumber}
                </p>
                <p>
                  Email:
                  {contact.email}
                </p>
                <p>
                  Address:
                  {contact.addresses[0]}
                </p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>

  );
};

export default MapView;
