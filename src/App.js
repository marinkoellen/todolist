import React, { useState } from "react";
import ToDoForm from "./components/TodoForm/TodoForm";
import ToDoItem from "./components/TodoItem/TodoItem";

import "./App.css";

function App() {
  // variables
  const [todos, setToDos] = useState([
    {text:"Finish plus project", isCompleted: false },
    {text:"Go to dog beach", isCompleted: false },
    {text:"Make Lasanga", isCompleted: false },
  ]);


  //method
  const addTodo = (text) => {
    //unpacking existing todos and adding new to do text to array
    const newTodos = [...todos, { text }];
    // update state of todo list
    setToDos(newTodos);
  };

  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setToDos(newTodos);
  }

  return(
  <div className="app">
    <div className="todo-list">
      <h1>My todo list</h1>
      {todos.map((todo, index)=>(
        <ToDoItem todo ={todo} key={index} index={index}
        completeTodo={completeTodo}/>
      ))}
      <ToDoForm addTodo={addTodo} />
    </div>
  </div>
  ) 
}

export default App;