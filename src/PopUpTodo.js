import React, { useState } from "react";
import "./PopUpTodo.css";

const PopUpTodo = ({ addTodo, HandleChange, inputTodo, setshow }) => {
  const [inputData, setInputData] = useState("");

  return (
    <>
      <div className="input_card">
        <h2>Add Todo</h2>
        <form
          onSubmit={(e) => {
            HandleChange(e, inputData);
            setshow(false);
          }}
        >
          <input
            className="input_area"
            required
            resize="none"
            placeholder="Add your task."
            value={inputData}
            onChange={(e) => setInputData(e.target.value)}
          ></input>
          <div className="popup_buttons_div">
            <button>Cancel</button>
            <button type="submit">Done</button>
          </div>
        </form>
        {/* <p>{todos}</p> */}
      </div>
    </>
  );
};

export default PopUpTodo;
