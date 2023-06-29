import React from 'react';
import TableView from '../components/TableView';
import MapView from '../components/MapView';
import { useAppContext } from '../AppContext';

const Dashboard = () => {
  const { values } = useAppContext();
  const { view, update } = values;

  return (
    <div className="flex ">
      <div className="flex-col p-7 w-full justify-between overflow-y-auto md:overflow-visible">
        <h1 className="text-2xl font-semibold mb-4">Dashboard</h1>
        <div>
          <button type="button" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 my-2 rounded" onClick={() => update({ view: 'table' })}>
            Table
          </button>
          {view === 'table' && <TableView />}
        </div>
        <div>
          <button type="button" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 my-2 rounded" onClick={() => update({ view: 'map' })}>
            Map
          </button>
          {view === 'map' && <MapView />}
        </div>
      </div>

    </div>
  );
};

export default Dashboard;
