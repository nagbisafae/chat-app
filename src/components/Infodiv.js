import React, { useState, useRef } from "react";
import NavPhone from "./NavPhone";
import Infochamps from "./Infochamps";
import Aya from "../assets/AyaNajib.png";
function Infodiv() {
  const [userName, setuserName] = useState("Aya Najib");
  const [email, setemail] = useState("aya.najib@gmail.com");
  const [phonenumber, setphonenumber] = useState("+212 69 34 34 12");
  const [password, setpassword] = useState("********");
  const [Image, setImage] = useState(Aya);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file)); // Mettre à jour l'image
    }
  };
  const handleNameChange = (e) => setuserName(e.target.value);
  const handleEmailChange = (e) => setemail(e.target.value);
  const handlePhoneChange = (e) => setphonenumber(e.target.value);
  const handlePasswordChange = (e) => setpassword(e.target.value);
  const [isEditing, setIsEditing] = useState(false);
  const handleEditClick = () => {
    setIsEditing(!isEditing); // Bascule entre mode édition et lecture seule
  };
  const fileInputRef = useRef(null);
  return (
    <>
      <div>
        <img
          src={Image}
          alt="Profile"
          className="w-28 mt-5 cursor-pointer" // Ajouter un curseur pointer pour indiquer que l'image est cliquable
          onClick={() => fileInputRef.current?.click()} // Utilisation de useRef pour cliquer sur l'input file
        />
        <div className="flex justify-center items-center">
          <label className="font-libre mt-2 font-bold">{userName}</label>
        </div>
        {/* Champ de sélection d'image masqué, qui est déclenché par un clic sur l'image */}
        {isEditing && (
          <input
            ref={fileInputRef} // Assignation de la référence à l'input
            type="file"
            accept="image/*" // Limite aux fichiers image
            onChange={handleImageChange} // Fonction pour gérer le changement d'image
            className="hidden" // Masquer l'input
          />
        )}
      </div>
      <div className=" bg-white bg-opacity-70 lg:h-72 h-custom6 lg:rounded-lg  rounded-s-3xl mt-3 pt-6 lg:w-custom6 w-full md:w-custom1 justify-center items-center pb-14   ">
        <div className="grid lg:grid-cols-2 grid-cols-1 justify-items-center items-center">
          <Infochamps
            label="Full Name"
            value={userName}
            col="text-orange"
            isEditable={isEditing}
            onChange={handleNameChange}
          />

          <Infochamps
            label="You Email"
            col="text-orange"
            value={email}
            isEditable={isEditing}
            onChange={handleEmailChange}
          />
          <Infochamps
            label="Your Phone number "
            col="text-orange"
            value={phonenumber}
            isEditable={isEditing}
            onChange={handlePhoneChange}
          />
          <Infochamps
            label="Your Password"
            col="text-orange"
            value={password}
            isEditable={isEditing}
            onChange={handlePasswordChange}
          />
        </div>
        <div className="flex justify-center items-center">
          <button
            onClick={handleEditClick}
            class="hover:bg-customBlue transition duration-150 ease-out hover:ease-in bg-orange h-10 text-white rounded-full drop-shadow-lg  font-serif w-72 mt-8 mb-8 text-center font-semibold text-sm  "
          >
            {isEditing ? "Save Changes" : "Edit"}
          </button>
        </div>
      </div>
      <NavPhone />
    </>
  );
}

export default Infodiv;
