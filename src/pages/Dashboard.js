import React from 'react';
import Sidebar from '../components/Sidebar';

const Dashboard = () => (
  <div className="flex">
    <div>
      <Sidebar />
    </div>
    <div className="p-7 text-2xl font-semibold flex-1 h-screen">
      Dashboard
    </div>
  </div>
);

export default Dashboard;
