import React from "react";

const Card = ({ name, profession, image, friends, handleClick, index }) => {
  return (
    <div className="w-60 p-5 shadow-2xl">
      <div className="w-full bg-blue-400 h-40">
        <img
          className="w-full h-full rounded-lg"
          src={image}
          alt=""
          srcset=""
        />
      </div>
      <div className="p-3">
        <h1 className="font-semibold text-md">{name}</h1>
        <h5 className="text-sm">{profession}</h5>
        <button
          onClick={() => {
            handleClick(index);
          }}
          className="bg-blue-500 px-3 py-1 mt-3 rounded-lg hover:bg-blue-700 transition-all ease-in-out duration-200"
        >
          {friends ? "friend" : "add friend"}
        </button>
      </div>
    </div>
  );
};
export default Card;
