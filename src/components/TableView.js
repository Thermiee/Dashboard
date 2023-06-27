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
    <div className="pb-24 md:pb-0 relative w-full overflow-y-auto md:overflow-visible">
      <table className="w-full text-sm text-left  mt-7 border rounded-lg">
        <thead className="" style={{ backgroundColor: '#F8FAFC' }}>
          <tr>
            <th scope="col" className="px-3 pl-7 py-5 whitespace-nowrap header font-semi-bold text-sm">
              Name
            </th>
            <th scope="col" className="px-3 pl-7 py-5 whitespace-nowrap header font-semi-bold text-sm">
              Phone Number
            </th>
            <th scope="col" className="px-3 pl-7 py-5 whitespace-nowrap header font-semi-bold text-sm">
              Email
            </th>
            <th scope="col" className="px-3 pl-7 py-5 whitespace-nowrap header font-semi-bold text-sm">
              Address
            </th>
            <th scope="col" className="px-3 pl-7 py-5 whitespace-nowrap header font-semi-bold text-sm">
              Longitude
            </th>
            <th scope="col" className="px-3 pl-7 py-5 whitespace-nowrap header font-semi-bold text-sm">
              Latitude
            </th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact, index) => (
          /* eslint-disable-next-line */
          <tr key={index}
            className="border"
          >
            <td className=" whitespace-nowrap px-3 py-4">
              {contact.name}
            </td>
            <td className=" whitespace-nowrap px-3 py-4">
              {contact.phoneNumber}
            </td>
            <td className=" whitespace-nowrap px-3 py-4">
              {contact.email}
            </td>
            <td className=" whitespace-nowrap px-3 py-4">
              {contact.addresses[Math.floor(Math.random() * contact.addresses.length)]}
            </td>
            <td className=" whitespace-nowrap px-3 py-4">
              {contact.longitude}
            </td>
            <td className=" whitespace-nowrap px-3 py-4">
              {contact.latitude}
            </td>
          </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableView;
