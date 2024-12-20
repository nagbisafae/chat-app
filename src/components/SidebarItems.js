import React from "react";

const SidebarItem = ({ icon, title, selected, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`flex items-center gap-3 px-6 py-2 rounded-xl cursor-pointer mb-8 ${
        selected ? "bg-orange text-white" : "text-customBlue hover:bg-emerald-100"
      }`}
    >
      {icon}
      <span className="font-medium text-sm">{title}</span>
    </div>
  );
};

export default SidebarItem;
