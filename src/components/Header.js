import React from "react";
import logo from "../images/logo.png";

function Header() {
  return (
    <header className="flex justify-center items-center bg-BlueVert">
        <img src={logo} alt="Haven logo" className="h-[60px] object-contain" />
    </header>
  );
}

export default Header;
