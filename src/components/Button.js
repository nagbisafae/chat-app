import React from 'react'

function Button({text, onClick}) {
  return (
    <button 
        onClick={onClick}
        className="bg-orange text-white font-semibold px-6 py-2 rounded-2xl w-[250px] hover:bg-customBlue shadow-lg hover:shadow-xl transition duration-300"
    >
        {text}
    </button>
  )
}

export default Button
