import React, { useState } from 'react';
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';
import { RiDashboardLine, RiFlightTakeoffLine } from 'react-icons/ri';
import { IoMdContacts } from 'react-icons/io';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const Menus = [
    {
      name: 'Dashboard',
      icon: (
        <RiDashboardLine className="cursor-pointer duration-500 text-white" />
      ),
      path: '/dashboard',
    },
    {
      name: 'Contact',
      icon: <IoMdContacts className="cursor-pointer duration-500 text-white" />,
      path: '/contact',
    },
  ];

  return (
    <div className="flex">
      <div
        className={`${
          open ? 'w-[130px]' : 'w-[70px]'
        } duration-500 h-screen p-5 pt-8 bg-blue-600 relative`}
      >
        <BsFillArrowLeftCircleFill
          className={`text-white text-2xl absolute cursor-pointer rounded-full right-0 top-9 w-5 ${
            !open && 'rotate-180'
          }`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center ">
          <div>
            <RiFlightTakeoffLine className="cursor-pointer duration-500 text-2xl text-white" />
          </div>
        </div>
        <ul className="pt-6">
          {Menus.map((menu) => (
            <li
              key={menu.name}
              className="flex gap-x-4 items-center pt-8 bg-blue-600 cursor-pointer"
            >
              <Link to={menu.path}>
                <div className="flex items-center">
                  <div>{menu.icon}</div>
                  <h1
                    className={`text-white origin-left p-1 text-base font-medium duration-500 ${
                      !open && 'scale-0'
                    }`}
                  >
                    {menu.name}
                  </h1>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
