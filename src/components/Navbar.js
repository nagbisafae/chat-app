import React from "react";
import ButtonsBar from "./ButtonsBar";
import { FaHome, FaComments, FaUser, FaSignOutAlt } from "react-icons/fa";

function Navbar() {
  return (
    <>
      <div
        class={`bg-white bg-opacity-70  w-40 h-custom5 rounded-xl ml-4 shadow-lg  justify-center pt-6  hidden md:hidden lg:flex`}
      >
        <div>
          <ButtonsBar icone={FaHome} label="Home" btnhref="/Home" />
          <ButtonsBar icone={FaComments} label="Chats" btnhref="/Chats" />
          <ButtonsBar
            icone={FaUser}
            label="Profile"
            backcol="bg-orange"
            textcol="text-white"
            shad="shadow-lg"
          />
          <ButtonsBar
            icone={FaSignOutAlt}
            label="Log out"
            btnhref="/#"
            marg="mt-72"
          />
        </div>
      </div>
    </>
  );
}

export default Navbar;
