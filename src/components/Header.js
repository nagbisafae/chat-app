import React from "react";
import logo from "../images/logo.png";
import { useNavigate, useLocation } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";

function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/Login");
  };

  return (
    <header className="flex justify-between items-center bg-BlueVert px-4 py-2">
      <img src={logo} alt="Haven logo" className="h-[60px] object-contain mx-auto" />
      {/* Conditionally render the logout button if not on the landing page */}
      {location.pathname !== "/" && (
        <button
          onClick={handleLogout}
          className="text-customBlue hover:text-orange transition lg:hidden"
        >
          <FiLogOut size={24} />
        </button>
      )}
    </header>
  );
}

export default Header;
