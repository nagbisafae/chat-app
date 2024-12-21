import React from "react";
import {
  IoHome,
  IoChatbubblesOutline,
  IoPersonCircleSharp,
} from "react-icons/io5";
import { useNavigate } from "react-router-dom";
function NavPhone() {
  const navigate = useNavigate();
  return (
    <div
      class="fixed bottom-0 left-0 right-0 bg-white shadow-2xl  flex md:hidden lg:hidden justify-around py-3 h-16
    "
    >
      <button
        onClick={() => navigate("/Home")}
        className="hover:text-orange cursor-pointer"
      >
        <IoHome className="w-11 h-6 " />
        <label className="font-bold">Home</label>
      </button>

      <button onClick={() => navigate("/Chats")} className="hover:text-orange ">
        <IoChatbubblesOutline className="w-11 h-6" />
        <label className="font-bold">Chats</label>
      </button>
      <button className="hover:text-orange text-orange">
        <IoPersonCircleSharp className="w-11 h-6" />
        <label className="font-bold">Profile</label>
      </button>
    </div>
  );
}

export default NavPhone;
