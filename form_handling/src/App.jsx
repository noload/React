import { useState } from "react";
import "./App.css";
import Cards from "./component/Cards";
import Form from "./component/Form";

function App() {
  const [users, setUsers] = useState([]);

  const handleFormSubmitData = (data) => {
    setUsers([...users, data]);
  };

  const handleRemove = (id) => {
    setUsers(() => {
      return users.filter((item, index) => index != id);
    });
  };

  return (
    <>
      <div className="w-full h-screen bg-zinc-200 flex items-center justify-center">
        <div className="container mx-auto">
          <Cards users={users} handleRemove={handleRemove} />
          <Form handleFormSubmitData={handleFormSubmitData} />
        </div>
      </div>
    </>
  );
}

export default App;
