import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const TableView = () => {
  const location = useLocation();

  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const { state } = location;
    if (Array.isArray(state)) {
      setContacts(state);
    }
  }, [location.state]);

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
            <th scope="col" className="px-3 py-5 whitespace-nowrap header font-semi-bold text-sm">
              Longitude
            </th>
            <th scope="col" className="px-3 py-5 whitespace-nowrap header font-semi-bold text-sm">
              Latitude
            </th>
          </tr>
        </thead>
        <tbody>
          { contacts && contacts.map((contact, index) => (
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
