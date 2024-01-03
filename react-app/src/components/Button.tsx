import React from "react";

interface Props{
    childern:String;
}

function Button({childern}:Props) {
  return <button className="btn btn-primary">{childern }</button>;
}

export default Button;
