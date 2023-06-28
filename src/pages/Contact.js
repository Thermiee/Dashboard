import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import Sidebar from '../components/Sidebar';

const Contact = ({ handleAddContact }) => {
  const [contact, setContact] = useState({
    name: '',
    phone: '',
    email: '',
    addresses: [],
    longitude: '',
    latitude: '',
  });

  const navigate = useNavigate();

  const {
    name, phone, email, addresses, longitude, latitude,
  } = contact;

  const handleChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddContact(contact);
    navigate('/dashboard', { state: contact });
  };

  const handleAddAddress = () => {
    if (addresses.length < 5) {
      setContact({ ...contact, addresses: [...addresses, ''] });
    }
  };

  const handleRemoveAddress = (index) => {
    const updatedAddresses = [...addresses];
    updatedAddresses.splice(index, 1);
    setContact({ ...contact, addresses: updatedAddresses });
  };

  const handleAddressChange = (index, value) => {
    const updatedAddresses = [...addresses];
    updatedAddresses[index] = value;
    setContact({ ...contact, addresses: updatedAddresses });
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-col p-3 w-full justify-between overflow-y-auto md:overflow-visible">
        <div>
          <h1 className="text-2xl font-semibold mb-4">Add Contact</h1>
          <form
            onSubmit={handleSubmit}
            className="shadow appearance-none border rounded max-w-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Name
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="phone"
              >
                Phone
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="Phone"
                  value={phone}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="longitude"
              >
                Longitude
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="longitude"
                  name="longitude"
                  type="text"
                  placeholder="Longitude"
                  value={longitude}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="latitude"
              >
                Latitude
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="latitude"
                  name="latitude"
                  type="text"
                  placeholder="Latitude"
                  value={latitude}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="addresses"
              >
                Addresses
                {addresses.map((address, index) => (
                  // eslint-disable-next-line react/no-array-index-key
                  <div key={index} className="flex">
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      name="addresses"
                      type="text"
                      placeholder="Address"
                      value={address}
                      onChange={(e) => handleAddressChange(index, e.target.value)}
                      required
                    />
                    <button
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                      type="button"
                      onClick={() => handleRemoveAddress(index)}
                    >
                      Remove
                    </button>
                  </div>
                ))}
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  type="button"
                  onClick={handleAddAddress}
                >
                  Add Address
                </button>
              </label>
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
                state={contact}
              >
                Add Contact
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

Contact.propTypes = {
  handleAddContact: PropTypes.func.isRequired,
};

export default Contact;
