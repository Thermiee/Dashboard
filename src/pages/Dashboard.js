import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import TableView from '../components/TableView';
import MapView from '../components/MapView';

const Dashboard = () => {
  const [view, setView] = useState('table');

  return (
    <div className="flex ">
      <Sidebar />
      <div className="flex-col p-5 w-full justify-between">
        <div>
          <button type="button" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-2 rounded" onClick={() => setView('table')}>
            Table
          </button>
          {view === 'table' && <TableView />}
        </div>
        <div>
          <button type="button" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-2 rounded" onClick={() => setView('map')}>
            Map
          </button>
          {view === 'map' && <MapView />}
        </div>
      </div>

    </div>
  );
};

export default Dashboard;
