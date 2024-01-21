import { RecoilRoot } from "recoil";
import "./App.css";

import Navbar from "./componeent/Navbar";

function App() {
  return (
    <>
      <RecoilRoot>
        <Navbar />
      </RecoilRoot>
    </>
  );
}

export default App;
