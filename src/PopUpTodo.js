import React, { useState } from "react";
import "./PopUpTodo.css";

const PopUpTodo = ({
  addTodo,
  HandleChange,
  inputTodo,
  setshow,
  editTodo,
  AddTodo,
}) => {
  const [inputData, setInputData] = useState("");

  return (
    <>
      <div className="input_card">
        <h2>Add Todo</h2>
        <div>
          <input
            className="input_area"
            required
            resize="none"
            placeholder="Add your task."
            value={inputData}
            onChange={(e) => setInputData(e.target.value)}

            // editTodo={editTodo}
          ></input>
          <div className="popup_buttons_div">
            <span className="cancle-btn">Cancel</span>
            <button onClick={() => AddTodo(inputData)}>Done</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PopUpTodo;
