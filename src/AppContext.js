/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
import React, {
  createContext, useMemo, useReducer, useContext,
} from 'react';
import PropTypes from 'prop-types';

export const AppStateContext = createContext();

export const AppStateProvider = ({ children }) => {
  const initialState = {
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
  };
  const [state, setState] = useReducer((state, newState) => ({ ...state, ...newState }), initialState);
  const { loading, selectedContact, ...restState } = state;
  const values = useMemo(() => ({
    ...restState, update: setState,
  }), [restState]);

  return (
    <AppStateContext.Provider value={{ values }}>
      {children}
    </AppStateContext.Provider>
  );
};

export const useAppContext = () => useContext(AppStateContext);

AppStateProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
