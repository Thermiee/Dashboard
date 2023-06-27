// MapView.js

import { useState } from 'react';
import {
  MapContainer, TileLayer, Marker, Popup,
} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const MapView = () => {
  const [contacts] = useState([

    {
      name: 'John Doe',
      phoneNumber: '1234567890',
      email: 'john@example.com',
      addresses: ['123 Main St', '456 Elm St'],
      longitude: 0,
      latitude: 0,
    },
    {
      name: 'Jane Smith',
      phoneNumber: '9876543210',
      email: 'jane@example.com',
      addresses: ['789 Oak St'],
      longitude: 0,
      latitude: 0,
    },
  ]);

  return (
    <div style={{ width: '100%', height: '400px' }}>
      <MapContainer center={[0, 0]} zoom={2} style={{ width: '100%', height: '100%' }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {contacts.map((contact, index) => (
          /* eslint-disable-next-line */
          <Marker key={index} position={[contact.latitude, contact.longitude]}>
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
