//hook
import { useState } from 'react'

function App() {
  const [todos, setTodos] = useState([{
    title:"learn python",
    desc:"learn python from code with harry"
  },{
    title:"learn c++",
    desc:"learn python from code with durga"
  }])

  function addTodo() {
    setTodos([...todos,{
      title:"new todo",
      desc:"desc for new todo"
    }])
  }

  return (
      <div>


      <button onClick={addTodo}>Add random todo</button>
        {
          todos.map((todo)=>{
            return <Todos title={todo.title} desc={todo.desc} ></Todos>
          })
        }

      </div>
  )    
}

function Todos(props) {
  return <div>
    <h3>{props.title}</h3>
    <p>{props.desc}</p>
  </div>
}



export default App
