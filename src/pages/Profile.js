import React from "react";
// import Profilepic from "../components/Profilepic";
// import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Infodiv from "../components/Infodiv";
import "../App.css";
import Sidebar from "../components/Sidebar";
function profile() {
  return (
    <div className="bg-BlueVert min-h-screen   ">
      <div className="flex ">
        <Sidebar />
        <div className="flex flex-col items-center flex-1 md:pl-[180px]">
          <Header />
          {/* <Profilepic /> */}
          <Infodiv />
        </div>
      </div>
    </div>
  );
}

export default profile;
