import React from "react";
import "./Todolist.css";

const Todolist = ({data}) => {
  // const local_Api = [
  //   { id: 0, name: "Book flight", check: true },
  //   { id: 1, name: "Book hotel", check: true },
  //   { id: 2, name: "Book cab", check: false },
  // ];

  return (
    <>
      <div>
        {data.map((task) => {
          return (
            <div>
              <div className="list_Of_Todo">
                <input type="checkbox" className="check_box"></input>
                <p className="todo_text">{task.name}</p>
                <div className="work_delay_teller">

                </div>
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
