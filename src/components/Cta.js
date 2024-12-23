import React from 'react'
import Button from './Button'
import { useNavigate } from "react-router-dom";

function Cta() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/SignUp"); 
  };

  return (
    <div className="text-center py-8">
      <h3 className="text-base font-medium text-customBlue mb-3">
        Start your journey with Haven today!
      </h3>
      <Button text="Get started"
      onClick={handleClick}/>
    </div>
  )
}

export default Cta
