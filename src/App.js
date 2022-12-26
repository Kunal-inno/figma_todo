import React from "react";
import "./App.css";
import Header from "./Header";
import Todolist from "./Todolist";

const App = () => {
  return (
    <>
      <div className="parent_Div">
        <div className="main_Todo_Div">
          <Header></Header>
          <Todolist></Todolist>
        </div>
      </div>
    </>
  );
};

export default App;
