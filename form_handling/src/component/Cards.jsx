import React from "react";
import Card from "./Card";

const Cards = ({ users, handleRemove }) => {
  return (
    <div className="w-full  max-h-96  flex justify-center gap-4 p-4 flex-wrap">
      {users.map((item, index) => {
        return (
          <Card
            key={index}
            index={index}
            {...item}
            handleRemove={handleRemove}
          />
        );
      })}
    </div>
  );
};

export default Cards;
