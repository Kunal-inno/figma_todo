import React, { useState } from "react";
import "./Header.css";
import { CiCirclePlus } from "react-icons/ci";
import PopUpTodo from "./PopUpTodo";

const Header = ({
  data,
  handleAddTodo,
  HandleChange,
  inputTodo,
  editTodo,
  AddTodo,
}) => {
  const [show, setshow] = useState(false);

  return (
    <>
      <div className="header_div">
        <h1 className="today_heading">Today</h1>

        <span className="plus_Sign" onClick={() => setshow(!show)}>
          <CiCirclePlus />
        </span>
      </div>
      {show ? (
        <PopUpTodo
          HandleChange={HandleChange}
          editTodo={editTodo}
          AddTodo={AddTodo}
          inputTodo={inputTodo}
          setshow={setshow}
          addTodo={(d) => {
            handleAddTodo(d);
            setshow(false);
          }}
        />
      ) : null}
    </>
  );
};

export default Header;
