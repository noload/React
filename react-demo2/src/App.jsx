import { useEffect, useState } from "react";
import React from "react";

function App() {
 const [todos,setTodos]=useState([])

 useEffect(()=>{
  setInterval(
    fetch("http://localhost:3000/todos").
    then(async (res)=>{
        const Jon = await res.json();
        setTodos(Jon.todos);
  }),1000)
 },[])

return <div>
{ 
  todos.map((todo)=>{
    <Todos title={todo.title} description={todo.description} />
  }) 
}
</div>
}

function Todos({title,description}) {
  return <div>
    <h2>{title}</h2>
    <p>{description}</p>
    </div>
  
}

export default App;