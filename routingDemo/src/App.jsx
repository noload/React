import React, { Suspense, lazy, useContext, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
// import { Dashboard } from './component/Dashboard'
import { Navbar } from "./component/Navbar";
import { CountContext } from "./component/Context";

const Dashboard = lazy(() => import("./component/Dashboard"));

const Landing = lazy(() => import("./component/Landing"));
function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <div>
        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route
              path="/dashboard"
              element={
                <Suspense fallback={"Loading..."}>
                  <Dashboard />
                </Suspense>
              }
            ></Route>
            <Route
              path="/"
              element={
                <Suspense fallback={"Loading..."}>
                  <Landing />
                </Suspense>
              }
            />
          </Routes>
        </BrowserRouter>

        <div>
          <CountContext.Provider value={{ count, setCount }}>
            <Count />
          </CountContext.Provider>
        </div>
      </div>
    </>
  );
}

function Count() {
  return (
    <div>
      <CountRendrer />
      <Button />
    </div>
  );
}

function CountRendrer() {
  const { count } = useContext(CountContext);

  return <div>{count}</div>;
}

function Button() {
  const { count, setCount } = useContext(CountContext);
  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrement
      </button>
    </div>
  );
}

export default App;
