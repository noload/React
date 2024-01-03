import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";
import Button from "./components/Button";

// let items = ["India", "Pakistan", "China", "Nepal", "Bangladesh"];

function App() {
  // const handleSelectItem =(item:String)=>{
  //   console.log(item);

  // }
  return (
    <div>
      {/* <ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem}></ListGroup> */}
      <Alert>
        Hello <span>World</span>
      </Alert>

      <Button childern={"My Button"}>My Button</Button>
    </div>
  );
}

export default App;
