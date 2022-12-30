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
  const HandleChange = (e, newTodo) => {
    e.preventDefault();
    settodos([...todos, { id: Math.random(), name: newTodo, check: false }]);
  };

  const removeTodo = (id) => {
    const newlist = todos.filter((todos) => todos.id !== id);
    settodos(newlist);
    console.log(id);
  };

  return (
    <>
      <div className="parent_Div">
        <div className="main_Todo_Div">
          <Header
            data={todos}
            handleAddTodo={handleAddTodo}
            HandleChange={HandleChange}
          ></Header>
          {/* {local_Api.map((todo)=><Header todo={todo}/>)} */}
          <Todolist data={todos} removeTodo={removeTodo}></Todolist>
          {/* <PopUpTodo></PopUpTodo> */}
        </div>
      </div>
    </>
  );
};

export default App;
