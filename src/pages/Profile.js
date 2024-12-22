import React from "react";
import Header from "../components/Header";
import Infodiv from "../components/Infodiv";
import Sidebar from "../components/Sidebar";
import "../App.css";

function Profile() {
  return (
    <div className="bg-gradient-to-b from-BlueVert to-[#F3F6F6] min-h-screen h-screen flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-grow lg:ml-[200px] px-6 flex flex-col items-center">
        <Header />
        <Infodiv />
      </div>
    </div>
  );
}

export default Profile;
