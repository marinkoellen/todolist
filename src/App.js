import React from "react";
import TodoItem from "./components/TodoItem"


function App() {
  return(
  <div>
    <h1>My todo list</h1>;
    <TodoItem todo="Finish plus project."/> 
    <TodoItem todo="Go to dog beach."/> 
    <TodoItem todo="Make lasanga."/> 
  </div>
  ) 
}

export default App;