import React from "react";
import "./Todolist.css";

const Todolist = () => {
  const local_Api = [
    { id: 0, name: "Book flight", check: true },
    { id: 1, name: "Book hotel", check: true },
    { id: 2, name: "Book cab", check: false },
  ];
  return (
    <>
      <div>
        {local_Api.map((task) => {
          return (
            <div>
              <div className="list_Of_Todo">
                <input type="checkbox" className="check_box"></input>
                <h2>{task.name}</h2>
              </div>
              <hr />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Todolist;
