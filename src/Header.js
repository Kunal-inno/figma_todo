import React, { useState } from "react";
import "./Header.css";

import { FaPlus } from "react-icons/fa";
import PopUpTodo from "./PopUpTodo";

const Header = () => {
  const [show, setshow] = useState(false);

  return (
    <>
      <div className="header_div">
        <h1>Today</h1>
        <span className="plus_Sign" onClick={() => setshow(!show)}>
          <FaPlus />
        </span>
      </div>
      {show ? <PopUpTodo /> : null}
    </>
  );
};

export default Header;
