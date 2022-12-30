import React from "react";
import "./Todolist.css";
import { MdDelete } from "react-icons/md";

const Todolist = ({ data, removeTodo }) => {
  console.log("data", data);

  return (
    <>
      <div>
        {data.map((task) => {
          return (
            <div key={task.id}>
              <div className="list_Of_Todo">
                <input type="checkbox" className="check_box"></input>
                <p className="todo_text">{task.name}</p>
                <span onClick={() => removeTodo(task.id)}>
                  <MdDelete className="delete-btn" />
                </span>
                <div className="work_delay_teller"></div>
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
