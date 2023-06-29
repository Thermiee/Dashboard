import React, { useEffect, useState } from 'react';
import {
  MapContainer, TileLayer, Marker, Popup,
} from 'react-leaflet';
import { useAppContext } from '../AppContext';
import 'leaflet/dist/leaflet.css';

const MapView = () => {
  const { values } = useAppContext();
  const { contacts } = values;
  const [markers, setMarkers] = useState([]);

  useEffect(() => {
    const fetchCoordinates = async (address) => {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${address}`,
      );
      const data = await response.json();

      if (data.length > 0) {
        const { lat, lon } = data[0];
        return [parseFloat(lat), parseFloat(lon)];
      }
      return null;
    };

    const fetchMarkers = async () => {
      const fetchedMarkers = await Promise.all(
        contacts.map(async (contact) => {
          if (contact.addresses.length > 0) {
            const address = contact.addresses[0];
            const coordinates = await fetchCoordinates(address);
            if (coordinates) {
              return {
                id: contact.id,
                position: coordinates,
                contact,
              };
            }
          }
          return null;
        }),
      );

      setMarkers(fetchedMarkers.filter((marker) => marker !== null));
    };

    fetchMarkers();
  }, [contacts]);

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

        {markers.map((marker) => (
          <Marker key={marker.id} position={marker.position}>
            <Popup>
              <div>
                <h3>{marker.contact.name}</h3>
                <p>
                  Phone:
                  {marker.contact.phone}
                </p>
                <p>
                  Email:
                  {marker.contact.email}
                </p>
                <p>
                  Address:
                  {marker.contact.addresses[0]}
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
