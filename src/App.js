import React from "react";
import "./App.css";
import Header from "./Header";
// import PopUpTodo from "./PopUpTodo";
import Todolist from "./Todolist";

const App = () => {
  return (
    <>
      <div className="parent_Div">
        <div className="main_Todo_Div">
          <Header></Header>
          <Todolist></Todolist>
          {/* <PopUpTodo></PopUpTodo> */}
        </div>
      </div>
    </>
  );
};

export default App;
