import React from "react";

const Card = ({ name, artist, image, added, handleClick, index }) => {
  return (
    <div className="w-60 bg-zinc-100 mt-10 p-4 pb-8 rounded-md flex gap-2 relative">
      <div className="w-20 h-20 bg-orange-200 rounded-lg overflow-hidden">
        <img
          className="w-full h-full object-cover "
          src={image}
          alt=""
          srcset=""
        />
      </div>
      <div className="">
        <h3 className="text-xl font-semibold">{name}</h3>
        <h3 className="text-md">{artist}</h3>
      </div>
      <button
        onClick={() => handleClick(index)}
        className={`px-4 py-3 absolute ${
          added ? "bg-teal-300" : " bg-orange-500"
        } rounded-full bottom-0 whitespace-nowrap left-1/2 translate-y-[50%] -translate-x-[50%] text-white text-xs`}
      >
        {added ? "added" : "add to favourite"}
      </button>
    </div>
  );
};

export default Card;
