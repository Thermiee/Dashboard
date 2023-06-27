import React from 'react';
import Sidebar from '../components/Sidebar';

const Home = () => (
  <div className="flex">
    <Sidebar />
    <div className="p-7 text-2xl font-semibold flex-1 h-screen">
      Home
    </div>
  </div>
);

export default Home;
