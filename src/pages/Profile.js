import React from "react";
// import Profilepic from "../components/Profilepic";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Infodiv from "../components/Infodiv";

function profile() {
  return (
    <div className="bg-BlueVert min-h-screen pt-6 pb-3">
      <div className="flex">
        <Navbar />
        <div className="flex flex-col items-center flex-1">
          <Header />
          {/* <Profilepic /> */}
          <Infodiv />
        </div>
      </div>
    </div>
  );
}

export default profile;
