import React from "react";
import NavPhone from "../components/NavPhone";
import Discdiv from "../components/Discdiv";
import NavChats from "../components/NavChats";
import Chatdiv from "../components/Chatdiv";
function Chats() {
  return (
    <>
      <div className="bg-BlueVert min-h-screen pt-6 pb-3">
        <div className="flex gap-4">
          <NavChats />
          <div className="flex flex-col "></div>
          <Chatdiv />
          <Discdiv />
        </div>
      </div>
      <NavPhone />
    </>
  );
}

export default Chats;
