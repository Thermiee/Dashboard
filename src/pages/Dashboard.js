import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import TableView from '../components/TableView';
import MapView from '../components/MapView';

const Dashboard = () => {
  const [view, setView] = useState('table');

  return (
    <div className="flex ">
      <Sidebar />
      <div className="flex-col p-3 w-full justify-between overflow-y-auto md:overflow-visible">
        <h1 className="text-2xl font-semibold mb-4">Dashboard</h1>
        <div>
          <button type="button" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 my-2 rounded" onClick={() => setView('table')}>
            Table
          </button>
          {view === 'table' && <TableView />}
        </div>
        <div>
          <button type="button" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 my-2 rounded" onClick={() => setView('map')}>
            Map
          </button>
          {view === 'map' && <MapView />}
        </div>
      </div>

    </div>
  );
};

export default Dashboard;
