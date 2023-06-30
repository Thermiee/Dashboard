/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';

const MainLayout = () => {
  const state = {};
  return (
    <div className="flex">
      <div>
        <Sidebar />
      </div>

      <div className="flex flex-col flex-auto h-screen overflow-hidden
"
      >
        <Outlet />
      </div>
    </div>
  );
};
export default MainLayout;
