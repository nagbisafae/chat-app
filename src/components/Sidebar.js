import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import SidebarItems from "./SidebarItems";
import {
  IoHome,
  IoChatbubblesOutline,
  IoPersonCircleSharp,
} from "react-icons/io5";
import { FiLogOut } from "react-icons/fi";

const Sidebar = ({ att }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selected, setSelected] = useState("Home");

  useEffect(() => {
    const currentPath = location.pathname;

    if (currentPath.startsWith("/Chats/")) {
      // Vérifie aussi les chemins comme "/Chats/1", "/Chats/2"
      setSelected("Chats");
    } else if (currentPath === "/Profile") {
      setSelected("Profile");
    } else if (currentPath === "/Home") {
      setSelected("Home");
    } else {
      setSelected(null); // Aucun onglet sélectionné pour d'autres chemins
    }
  }, [location.pathname]);

  const items = [
    { id: "Home", icon: <IoHome size={24} />, title: "Home", path: "/Home" },
    {
      id: "Chats",
      icon: <IoChatbubblesOutline size={24} />,
      title: "Chats",
      path: "/Chats",
    },
    {
      id: "Profile",
      icon: <IoPersonCircleSharp size={24} />,
      title: "Profile",
      path: "/Profile",
    },
  ];

  const logout = {
    id: "Logout",
    icon: <FiLogOut size={24} />,
    title: "Log out",
  };

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/Login");
  };

  return (
    <>
      {/* Sidebar for large screens */}
      <div
        className={`hidden lg:flex ${att} flex-col items-center py-6 fixed w-[166px] left-[15px] top-[15px] bottom-[15px] bg-white/70 shadow-md rounded-[20px]`}
      >
        {items.map((item) => (
          <SidebarItems
            key={item.id}
            icon={item.icon}
            title={item.title}
            selected={selected === item.id}
            onClick={() => {
              setSelected(item.id);
              navigate(item.path);
            }}
          />
        ))}
        <div className="mt-auto">
          <SidebarItems
            key={logout.id}
            icon={logout.icon}
            title={logout.title}
            selected={false}
            onClick={handleLogout}
          />
        </div>
      </div>

      {/* Bottom Navigation Bar for small screens */}
      <div className="fixed bottom-0 left-0 right-0 bg-white shadow-2xl lg:hidden flex justify-around py-3">
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => navigate(item.path)}
            className={`flex flex-col items-center ${
              selected === item.id
                ? "text-orange font-bold"
                : "text-customBlue font-medium"
            }`}
          >
            {item.icon}
            <span className="text-sm">{item.title}</span>
          </button>
        ))}
      </div>
    </>
  );
};

export default Sidebar;
