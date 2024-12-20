import React from "react";

function Avatardiv({ img, name, lastmess, numb, bgcol, mg, bgnumb }) {
  return (
    <div
      className={`${bgcol} w-72 rounded-3xl h-24 flex cursor-pointer hover:bg-customBlue1 `}
    >
      <img src={img} className=" w-20 h-20" alt="img" />
      <div class="flex flex-col justify-center">
        <div className={`flex justify-between`}>
          <label className="text-customBlue font-semibold font-libre ">
            {name}
          </label>
          <p className={`${bgnumb} rounded-full  text-white `}>
            &nbsp;&nbsp;{numb}&nbsp;&nbsp;
          </p>
        </div>
        <h6 className="text-white font-libre text-xs">{lastmess}</h6>
      </div>
    </div>
  );
}

export default Avatardiv;
