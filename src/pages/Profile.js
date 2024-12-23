import React from "react";
import Header from "../components/Header";
import Infodiv from "../components/Infodiv";
import Sidebar from "../components/Sidebar";
import "../App.css";

function Profile() {
  return (
    <div className="min-h-screen h-screen overflow-y-auto bg-gradient-to-b from-BlueVert to-[#F3F6F6] pb-2 lg:pb-0 custom-scrollbar">
      <Header />
      <Sidebar />
      <div className="flex-grow lg:ml-[200px] px-6 flex flex-col items-center">
        <Infodiv />
      </div>
    </div>
  );
}

export default Profile;
