import React from 'react';
import { useLocation } from 'react-router-dom';

const TableView = () => {
  const location = useLocation();
  const { state } = location;

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

          <tr
            key={state.id}
            className="border"
          >
            <td className=" whitespace-nowrap px-3 py-4">
              {state.name}
            </td>
            <td className=" whitespace-nowrap px-3 py-4">
              {state.phoneNumber}
            </td>
            <td className=" whitespace-nowrap px-3 py-4">
              {state.email}
            </td>
            <td className=" whitespace-nowrap px-3 py-4">
              {state.addresses[Math.floor(Math.random() * state.addresses.length)]}
            </td>
            <td className=" whitespace-nowrap px-3 py-4">
              {state.longitude}
            </td>
            <td className=" whitespace-nowrap px-3 py-4">
              {state.latitude}
            </td>
          </tr>

        </tbody>
      </table>
    </div>
  );
};

export default TableView;
