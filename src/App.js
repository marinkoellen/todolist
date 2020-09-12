import React, { useState } from "react";
import ToDoForm from "./components/TodoForm";
import ToDoItem from "./components/TodoItem";


function App() {
  // variables
  const [todos, setToDos] = useState([
    "Finish plus project",
    "Go to dog beach",
    "Make Lasanga",
  ]);


  //method
  const addTodo = (text) => {
    //unpacking existing todos and adding new to do text to array
    const newTodos = [...todos, text];
    // update state of todo list
    setToDos(newTodos);
  };

  return(
  <div>
    <h1>My todo list</h1>
    {todos.map((todo, index)=>(
      <ToDoItem todo ={todo} key={index}/>
    ))}
    <ToDoForm addTodo={addTodo} />
  </div>
  ) 
}

export default App;