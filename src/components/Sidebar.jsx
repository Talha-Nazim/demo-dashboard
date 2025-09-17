import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaChevronDown, FaChevronRight, FaGears } from "react-icons/fa6";
import { FiTable } from "react-icons/fi";
import { GoGraph } from "react-icons/go";
import { MdSpaceDashboard } from "react-icons/md";
import {
  TbLayoutSidebarLeftCollapse,
  TbLayoutSidebarLeftExpand,
} from "react-icons/tb";

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const [subMenus, setSubMenus] = useState({}); // dynamic

  const toggleSubMenu = (menu) => {
    setSubMenus((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }));
  };

  // menus with path + submenus with path
  const Menus = [
    { title: "Dashboard", icon: <MdSpaceDashboard />, path: "/" },
    { title: "Tables", icon: <FiTable />, path: "/tables" },
    { title: "Analytics", icon: <GoGraph />, path: "/analytics" },
    {
      title: "Setting",
      icon: <FaGears />,
      path: "/settings",
      key: "settings",
      subMenu: [
        { name: "General", path: "/settings/general" },
        { name: "Security", path: "/settings/security" },
        { name: "Notifications", path: "/settings/notifications" },
      ],
    },
  ];

  return (
    <div className="w-full flex">
      {/* Sidebar section */}
      <div
        className={`${
          open ? "w-72 p-5" : "w-20 p-4"
        } bg-zinc-900 h-screen pt-8 relative duration-300 ease-in-out`}
      >
        {/* Toggle button */}
        <div
          className={`absolute cursor-pointer -right-4 top-9 w-8 h-8 p-0.5 bg-zinc-50 border-zinc-50 border-2 rounded-full text-xl flex items-center justify-center ${
            !open && "rotate-180"
          } transition-all ease-in-out duration-300`}
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <TbLayoutSidebarLeftExpand />
          ) : (
            <TbLayoutSidebarLeftCollapse />
          )}
        </div>

        {/* Logo */}
        <div className="flex gap-x-4 items-center">
          <img
            src="https://cdn.pixabay.com/photo/2017/02/18/19/20/logo-2078018_640.png"
            alt="logo"
            className={`w-10 h-10 rounded-full object-cover object-center cursor-pointer ease-in-out duration-300 ${
              open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-zinc-50 origin-left font-semibold text-xl duration-200 ease-in-out ${
              !open && "scale-0"
            }`}
          >
            Admin Dashboard
          </h1>
        </div>

        {/* Menu list */}
        <ul className="pt-6 space-y-0.5">
          {Menus.map((Menu, index) => (
            <li key={index} className="flex flex-col">
              <div
                className="flex items-center justify-between gap-x-4"
                onClick={() => Menu.subMenu && toggleSubMenu(Menu.key)}
              >
                {/* main menu NavLink */}
                <NavLink
                  to={Menu.path}
                  className={({ isActive }) =>
                    `flex items-center gap-2 w-full rounded-md py-3 px-4 cursor-pointer transition-all ease-in-out duration-300 
                    ${
                      isActive
                        ? "bg-zinc-800 text-white"
                        : "text-zinc-50 hover:bg-zinc-800/50"
                    }`
                  }
                >
                  <span className="text-lg">{Menu.icon}</span>
                  <span
                    className={`${!open && "hidden"} origin-left ease-in-out duration-300`}
                  >
                    {Menu.title}
                  </span>
                </NavLink>

                {Menu.subMenu && (
                  <span
                    className={`ml-auto cursor-pointer text-sm transition-transform ease-in-out duration-300 ${
                      subMenus[Menu.key] ? "rotate-360" : ""
                    } ${!open ? "hidden" : ""}`}
                  >
                    {subMenus[Menu.key] ? <FaChevronDown /> : <FaChevronRight />}
                  </span>
                )}
              </div>

              {/* submenus */}
              {Menu.subMenu && subMenus[Menu.key] && (
                <ul className="pl-3 pt-2 text-zinc-300">
                  {Menu.subMenu.map((sub, subIndex) => (
                    <NavLink
                      key={subIndex}
                      to={sub.path}
                      className={({ isActive }) =>
                        `text-sm flex items-center gap-x-2 py-2 px-2 rounded-lg transition-all 
                        ${
                          isActive
                            ? "bg-zinc-800 text-white"
                            : "hover:bg-zinc-800 text-zinc-300"
                        }`
                      }
                    >
                      <FaChevronRight className="text-xs" />
                      {sub.name}
                    </NavLink>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
