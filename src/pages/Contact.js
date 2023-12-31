import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../AppContext';

const Contact = () => {
  const { values } = useAppContext();
  const { contacts, update } = values;
  const [contact, setContact] = useState({
    name: '',
    phone: '',
    email: '',
    addresses: [''],
    longitude: '',
    latitude: '',
  });

  const navigate = useNavigate();
  const [error, setError] = useState('');

  const {
    name, phone, email, addresses, longitude, latitude,
  } = contact;

  const handleChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const phoneRegex = /^\d{11}$/;

    if (phoneRegex.test(phone)) {
      update({ contacts: [...contacts, contact] });
      navigate('/', { state: contact });

      setContact({
        name: '',
        phone: '',
        email: '',
        addresses: [''],
        longitude: '',
        latitude: '',
      });
    } else {
      setError('Invalid phone number');
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };

  const isEmailValid = validateEmail(email);

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
      <div className="flex-col p-7 w-full justify-between overflow-y-auto md:overflow-visible">
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
            {error && <p className="text-red-500">{error}</p>}
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
                  type="text"
                  placeholder="Enter 11 digits number"
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
                  className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                    !isEmailValid && 'border-red-500'
                  }`}
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={handleChange}
                  required
                />
                {!isEmailValid && (
                <p className="text-red-500 text-xs italic">Please enter a valid email address.</p>
                )}
              </label>
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="longitude"
              >

                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="longitude"
                  name="longitude"
                  type="hidden"
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

                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="latitude"
                  name="latitude"
                  type="hidden"
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

export default Contact;
