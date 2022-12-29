import React,{useState} from "react";
import "./PopUpTodo.css";

const PopUpTodo = ({addTodo,HandleChange,inputTodo}) => {
  // const [todos, settodos] = useState("");
  // const [list, setlist] = useState([]);



  // const inputTodo=(e)=>{
  //   settodos(e.target.value)
    
  // }


  // const HandleChange=(e)=>{
  //   e.preventDefault()
  //   const newtodo={ id:Math.random(), name:name, check: false }
  //   addTodo(newtodo)
  //   setname("")

  // }


  // const addToList=(e)=>{
  //   setlist(e.target.value)
  // }
  return (
    <>
      <div className="input_card">
        <h2>Add Todo</h2>
        <form onSubmit={HandleChange}>
          <input className="input_area" required resize="none" onChange={inputTodo}></input>
          <div className="popup_buttons_div">
            <button>Cancel</button>
            <button type="submit" onClick={addTodo}>Done</button>
          </div>
        </form>
        {/* <p>{todos}</p> */}
      </div>
    </>
  );
};

export default PopUpTodo;
