import React from "react";
import ButtonsBar from "./ButtonsBar";
import { FaHome, FaComments, FaUser, FaSignOutAlt } from "react-icons/fa";

function Navbar() {
  return (
    <>
      <div
        class={`bg-white bg-opacity-70  w-40 lg:h-custom5 md:h-custom7  rounded-xl ml-4 shadow-lg  justify-center pt-6  hidden md:flex lg:flex`}
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
            marg="lg:mt-72 md:mt-450px "
          />
        </div>
      </div>
    </>
  );
}

export default Navbar;
