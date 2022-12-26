import React from "react";
import "./PopUpTodo.css";

const PopUpTodo = () => {
  return (
    <>
      <div className="input_card">
        <div>
          <h2>Add Todo</h2>

          <textarea className="input_area"></textarea>
        </div>
        <div className="popup_buttons_div">
          <button>Cancel</button>
          <button>Done</button>
        </div>
      </div>
    </>
  );
};

export default PopUpTodo;
