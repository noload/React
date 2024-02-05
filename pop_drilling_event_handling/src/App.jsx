import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./component/Card";

function App() {
  const handleClick = (changeIndex) => {
    setData((prev) => {
      return prev.map((item, index) => {
        if (index === changeIndex) {
          return { ...item, friends: !item.friends };
        }
        return item;
      });
    });
  };

  const raw = [
    {
      name: "vaibhav",
      profession: "Coder",
      image:
        "https://media.istockphoto.com/id/1476170969/photo/portrait-of-young-man-ready-for-job-business-concept.jpg?s=1024x1024&w=is&k=20&c=8mgK2Kq73o8DIjazvLmEGkhx2p_7P5r3mvpbIM6q5cA=",
      friends: false,
    },
    {
      name: "Neeraj",
      profession: "Lead",
      image:
        "https://media.istockphoto.com/id/1300972574/photo/millennial-male-team-leader-organize-virtual-workshop-with-employees-online.webp?b=1&s=170667a&w=0&k=20&c=96pCQon1xF3_onEkkckNg4cC9SCbshMvx0CfKl2ZiYs=",
      friends: false,
    },
    {
      name: "Sohel",
      profession: "Frondend engineer",
      image:
        "https://media.istockphoto.com/id/482913249/photo/richard-kirstin-balcony-laptop-038.webp?b=1&s=170667a&w=0&k=20&c=QG9Oic8BlZGrxwafj7o14Bgw1cNExWwX7VRmHvcTKFw=",
      friends: false,
    },
  ];

  const [data, setData] = useState(raw);
  return (
    <>
      <div className="w-screen h-screen  flex justify-center items-center bg-zinc-200 gap-3">
        {data.map((item, index) => {
          return (
            <Card
              {...item}
              key={index}
              handleClick={handleClick}
              index={index}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
