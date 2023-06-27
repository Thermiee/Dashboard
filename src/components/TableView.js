import { useState } from 'react';

const TableView = () => {
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
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Phone Number</th>
          <th>Email</th>
          <th>Address</th>
          <th>Longitude</th>
          <th>Latitude</th>
        </tr>
      </thead>
      <tbody>
        {contacts.map((contact, index) => (
          /* eslint-disable-next-line */
          <tr key={index}>
            <td>{contact.name}</td>
            <td>{contact.phoneNumber}</td>
            <td>{contact.email}</td>
            <td>{contact.addresses[Math.floor(Math.random() * contact.addresses.length)]}</td>
            <td>{contact.longitude}</td>
            <td>{contact.latitude}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableView;
