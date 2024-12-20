import React from "react";
import Avatardiv from "./Avatardiv";
import Nada from "../assets/Nada.png";
import Ines from "../assets/Ines.png";
import Imad from "../assets/Imad.png";
import Rania from "../assets/Rania.png";
// import {Nada} from "../assets/Nada.png"
import { CiSearch } from "react-icons/ci";
function Chatdiv() {
  return (
    <div className="bg-white rounded-xl w-80  ">
      <div className="bg-white rounded-lg shadow-lg flex justify-around  mt-6 h-14 text-center ml-3 mr-3 ">
        <input
          type="text"
          placeholder="Search"
          className="outline-none text-sm"
        />
        <CiSearch className="text-gray-500 self-center text-lg " />
      </div>
      <div className="flex justify-center items-center mt-4">
        <Avatardiv
          img={Nada}
          name="Nada Lawyer"
          lastmess="Good luck for your journey"
          numb="2"
          bgcol="bg-customBlue1"
          bgnumb="bg-customBlue"
        />
      </div>
      <div className="flex justify-center items-center mt-4">
        <Avatardiv
          img={Ines}
          name="Firefighter Ines"
          lastmess="Don’t panic !! "
          bgcol="bg-BlueVert"
        />
      </div>
      <div className="flex justify-center items-center mt-4">
        <Avatardiv
          img={Imad}
          name="HR Specialist Imad"
          lastmess="Focus on building skills"
          bgcol="bg-BlueVert"
        />
      </div>
      <div className="flex justify-center items-center mt-4">
        <Avatardiv
          img={Rania}
          name="Dr Rania"
          lastmess="Thank you doctor for your advices "
          bgcol="bg-BlueVert"
        />
      </div>
    </div>
  );
}

export default Chatdiv;
