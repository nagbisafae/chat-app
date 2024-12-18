import React from 'react'
import logo from "../images/logo.png"

function Header() {
  return (
    <header className="flex justify-center items-center bg-BlueVert">
        <img src={logo} alt="Haven logo" className="h-20 w-30" />
    </header>
  )
}

export default Header
