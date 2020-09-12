import React, { useState } from "react";
import ToDoItem from "./components/TodoItem";


function App() {
  // variables
  const [todos, setToDos] = useState([
    "Finish plus project",
    "Go to dog beach",
    "Make Lasanga",
  ]);
  return(
  <div>
    <h1>My todo list</h1>
    {todos.map((todo, index)=>(
      <ToDoItem todo ={todo} key={index}/>
    ))}
  </div>
  ) 
}

export default App;