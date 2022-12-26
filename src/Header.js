import React from "react";
import "./Header.css";

import { FaPlus } from "react-icons/fa";

const Header = () => {
  return (
    <>
      <div className="header_div">
        <h1>Today</h1>
        <span className="plus_Sign">
          <FaPlus />
        </span>
      </div>
    </>
  );
};

export default Header;
