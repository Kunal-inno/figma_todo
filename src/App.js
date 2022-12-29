import React,{useState} from "react";
import "./App.css";
import Header from "./Header";
// import PopUpTodo from "./PopUpTodo";
import Todolist from "./Todolist";

const App = () => {
  // const [name, setname] = useState("");
  // const newtodo={ id:Math.random(), name:todos, check: false }
  const [todos, settodos] = useState("");
  const local_Api = [
    { id: 0, name: "Book flight", check: true },
    { id: 1, name: "Book hotel", check: true },
    { id: 2, name: "Book cab", check: false },
  ];

  const handleAddTodo=(newtodo)=>{
    console.log(newtodo)
    // <p>{props.}</p>
    
    // console.log(props)
  }
  const HandleChange=(e)=>{
    e.preventDefault()
    const newtodo={ id:Math.random(), name:todos, check: false }
    handleAddTodo(newtodo)
    settodos("")

  }
  const inputTodo=(e)=>{
    settodos(e.target.value)
    
  }
  

  return (
    <>
      <div className="parent_Div">
        <div className="main_Todo_Div">
          <Header data={local_Api} handleAddTodo={handleAddTodo} HandleChange={HandleChange} inputTodo={inputTodo}></Header>
          {/* {local_Api.map((todo)=><Header todo={todo}/>)} */}
          <Todolist data={local_Api}  ></Todolist>
          {/* <PopUpTodo></PopUpTodo> */}
        </div>
      </div>
    </>
  );
};

export default App;
