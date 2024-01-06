import React from "react";
import ReactDOM from "react-dom/client";

const Logo = () => {
  return <h1>ReactComponet</h1>;
};

const HeaderComponent = () => {
  return (
    <>
      <Logo />
      <ul>
        <li>About</li>
        <li>Constact</li>
        <li>Service</li>
        <li>Profile</li>
      </ul>
    </>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeaderComponent />);
