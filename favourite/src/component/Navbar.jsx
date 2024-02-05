import React from "react";

const Navbar = ({ data }) => {
  return (
    <div className="flex justify-between px-10 py-2">
      <h3>Orange</h3>
      <div className="flex px-3 bg-orange-400 rounded-md">
        <h3>favourite</h3>
        <h3>{data.filter((item) => item.added).length}</h3>
      </div>
    </div>
  );
};

export default Navbar;
