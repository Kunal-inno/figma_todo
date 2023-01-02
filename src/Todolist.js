import React, { useState } from "react";
import "./Todolist.css";
import { MdDelete } from "react-icons/md";
import { AiFillEdit } from "react-icons/ai";
import PopUpTodo from "./PopUpTodo";

const Todolist = ({
  data,
  removeTodo,
  editTodo,
  HandleChange,
  inputTodo,
  handleAddTodo,
  setshow,
}) => {
  console.log("data", data);
  const [showEdit, setshowEdit] = useState(false);

  return (
    <>
      <div>
        {data.map((task) => {
          return (
            <div key={task.id}>
              <div className="list_Of_Todo">
                <input type="checkbox" className="check_box"></input>
                <p className="todo_text">{task.name}</p>

                {/* delete button  */}

                <span onClick={() => removeTodo(task.id)}>
                  <MdDelete className="delete-btn" />
                </span>

                {/* edit button  */}

                {/* <span onClick={() => editTodo(task.id,task.name)}> */}
                <span onClick={() => setshowEdit(!showEdit)}>
                  <AiFillEdit className="edit-btn" />
                </span>
                <div className="work_delay_teller"></div>
              </div>
              <hr />
            </div>
          );
        })}
      </div>
      {showEdit ? (
        <PopUpTodo
          HandleChange={HandleChange}
          editTodo={editTodo}
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

export default Todolist;
