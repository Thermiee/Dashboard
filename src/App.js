import './App.css';
import React, { lazy } from 'react';
import { useRoutes, Navigate } from 'react-router-dom';
import Loadable from './components/Loadable';
import { AppStateProvider } from './AppContext';
import MainLayout from './components/Layout';

const Dashboard = Loadable(lazy(() => import('./pages/Dashboard')));
const Contact = Loadable(lazy(() => import('./pages/Contact')));

export const AppRoutes = {
  path: '/',
  element: (
    <AppStateProvider>
      <MainLayout />
    </AppStateProvider>

  ),
  children: [
    {
      path: '/',
      element: <Navigate to="/dashboard" replace />,
    },
    {
      path: '/dashboard',
      element: <Dashboard />,
    },
    {
      path: '/contact',
      element: <Contact />,
    },
  ],
};

const Routes = () => useRoutes([
  AppRoutes,
]);

function App() {
  return (
    <Routes />
  );
}

export default App;
