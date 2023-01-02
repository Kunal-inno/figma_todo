import React, { useState } from "react";
import "./App.css";
import Header from "./Header";
import Todolist from "./Todolist";

const App = () => {
  const local_Api = [
    { id: 0, name: "Book flight", check: true },
    { id: 1, name: "Book hotel", check: true },
    { id: 2, name: "Book cab", check: false },
  ];
  const [todos, settodos] = useState(local_Api);

  const handleAddTodo = (newtodo) => {
    const newlist = [...local_Api, newtodo];
    settodos(newlist);
    console.log(newlist);
  };

  // add button

  const AddTodo = (inputData) => {
    settodos([...todos, { id: Math.random(), name: inputData, check: false }]);
  };

  const HandleChange = (e, newTodo) => {
    e.preventDefault();
    settodos([...todos, { id: Math.random(), name: newTodo, check: false }]);
  };

  const removeTodo = (id) => {
    const newlist = todos.filter((todos) => todos.id !== id);
    settodos(newlist);
    console.log(id);
  };
  const editTodo = (id, nam) => {
    // const newEditlist = todos.filter((todos) => todos.id === id);
    // prompt(id,nam)
    // settodos(newEditlist);

    console.log(id, nam);
  };

  return (
    <>
      <div className="parent_Div">
        <div className="main_Todo_Div">
          <Header
            data={todos}
            handleAddTodo={handleAddTodo}
            HandleChange={HandleChange}
            editTodo={editTodo}
            AddTodo={AddTodo}
          ></Header>

          <Todolist
            data={todos}
            removeTodo={removeTodo}
            editTodo={editTodo}
          ></Todolist>
        </div>
      </div>
    </>
  );
};

export default App;
