import React from 'react';
import Sidebar from '../components/Sidebar';

const Dashboard = () => (
  <div className="flex items-center ">

    <Sidebar />

    <div className="p-7 items-center text-2xl font-semibold flex-1 h-screen">
      Dashboard
    </div>
  </div>
);

export default Dashboard;
