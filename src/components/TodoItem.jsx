import React from "react";

function ToDoItem(props) {
    const { todo } = props;
    return <div>{todo}</div>;
}


export default ToDoItem;