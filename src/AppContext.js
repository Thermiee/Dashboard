import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const AppStateContext = createContext();

export const AppStateProvider = ({ children }) => {
  const [state, setState] = useState({
    view: 'table',
    contacts: [],
    contact: {
      name: '',
      phone: '',
      email: '',
      addresses: [''],
      longitude: '',
      latitude: '',
    },
  });

  return (
    <AppStateContext.Provider value={{ state, setState }}>
      {children}
    </AppStateContext.Provider>
  );
};

AppStateProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
