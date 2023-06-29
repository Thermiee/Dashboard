import React from 'react';
import { useAppContext } from '../AppContext';

const TableView = () => {
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
    <div className=" md:pb-0 relative w-full overflow-y-auto md:overflow-visible">
      <table className="w-full text-sm text-center mt-7 border rounded-lg">
        <thead className="" style={{ backgroundColor: '#F8FAFC' }}>
          <tr>
            <th scope="col" className="px-3 py-5 whitespace-nowrap header font-semi-bold text-sm">
              Name
            </th>
            <th scope="col" className="px-3 py-5 whitespace-nowrap header font-semi-bold text-sm">
              Phone Number
            </th>
            <th scope="col" className="px-3 py-5 whitespace-nowrap header font-semi-bold text-sm">
              Email
            </th>
            <th scope="col" className="px-3 py-5 whitespace-nowrap header font-semi-bold text-sm">
              Address
            </th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <tr key={contact.id} className="border">
              <td className="whitespace-nowrap px-3 py-4">{contact.name}</td>
              <td className="whitespace-nowrap px-3 py-4">{contact.phone}</td>
              <td className="whitespace-nowrap px-3 py-4">{contact.email}</td>
              <td className="whitespace-nowrap px-3 py-4">
                {contact.addresses[Math.floor(Math.random() * contact.addresses.length)]}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableView;
