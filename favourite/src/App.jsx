import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./component/Navbar";
import Card from "./component/Card";

function App() {
  const raw = [
    {
      image:
        "https://images.unsplash.com/photo-1706969049924-25a377c2ea9d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8",
      name: "Chak de india",
      artist: "Vaibhav",
      added: false,
    },
    {
      image:
        "https://images.unsplash.com/photo-1682685795557-976f03aca7b2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8",
      name: "Chak de india",
      artist: "Vaibhav",
      added: false,
    },
    {
      image:
        "https://images.unsplash.com/photo-1682685795557-976f03aca7b2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8",
      name: "Chak de india",
      artist: "Vaibhav",
      added: false,
    },
    {
      image:
        "https://images.unsplash.com/photo-1682687982029-edb9aecf5f89?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Chak de india",
      artist: "Vaibhav",
      added: false,
    },
  ];

  const [data, setData] = useState(raw);

  const handleClick = (index) => {
    setData((prev) => {
      return prev.map((item, itmIndex) => {
        if (itmIndex == index) {
          return { ...item, added: !item.added };
        }
        return item;
      });
    });
  };
  return (
    <>
      <Navbar data={data} />

      <div className="px-20 flex gap-10 mt-10  flex-wrap">
        {data.map((obj, index) => (
          <Card {...obj} handleClick={handleClick} index={index} key={index} />
        ))}
      </div>
    </>
  );
}

export default App;
