import React from "react";

function DiscussionAvatar({ avatar, name}) {
  return (
    <div className="flex items-center gap-4 p-4 bg-BlueVert rounded-xl shadow-md mb-4">
      <img src={avatar} alt={name} className="h-20 object-contain rounded-full" />
      <div>
        <h2 className="text-lg font-semibold text-customBlue">{name}</h2>
      </div>
    </div>
  );
}

export default DiscussionAvatar;
