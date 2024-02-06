import React from "react";

const Card = ({ name, email, image, handleRemove, index }) => {
  return (
    <>
      <div className="w-52 h-full bg-zinc-100 rounded-lg flex flex-col items-center p-2">
        <div className="image w-[3vw] h-[3vw] rounded-full bg-zinc-200 overflow-hidden">
          <img className="w-full h-full object-cover " src={image} alt="" />
        </div>
        <h1 className="text-xl font-semibold mt-1 text-center">{name}</h1>
        <h4 className="opacity-60 text-xs font-semibold">{email}</h4>
        <p className="text-center text-xs font-semibold leading-1 tracking-tight mt-1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi sunt
          recusandae modi!
        </p>
        <button
          onClick={() => {
            handleRemove(index);
          }}
          className="px-5 py-1 bg-red-600 text-xs rounded-md font-semibold text-white mt-4"
        >
          remove
        </button>
      </div>
    </>
  );
};

export default Card;
