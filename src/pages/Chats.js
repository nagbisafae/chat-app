import React from "react";
import { useParams } from "react-router-dom";
import Discdiv from "../components/Discdiv";
import Chatdiv from "../components/Chatdiv";
import DefaultDiscdiv from "../components/DefaultDiscdiv";
import Sidebar from "../components/Sidebar";

function Chats() {
  const { expertId } = useParams();

  return (
    <div className="bg-gradient-to-b from-BlueVert to-[#F3F6F6] min-h-screen flex">
      <Sidebar />

      {/* Main Content */}
      <div className="flex-grow lg:ml-[200px] px-6 flex flex-col lg:flex-row gap-4 mt-[15px] mb-[15px]">
        <Chatdiv className="w-full lg:w-1/3" />

        <div className="flex-grow flex justify-center">
          <div className="w-full max-w-3xl">
            {expertId ? <Discdiv /> : <DefaultDiscdiv />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chats;
