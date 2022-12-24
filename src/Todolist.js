import React from 'react'
import "./Todolist.css"

const Todolist = () => {
    const localApi=[
        {id:0,name:"Book flight",check:true},
        {id:1,name:"Book hotel",check:true},
        {id:2,name:"Book cab",check:false}
    ]
  return (
    <>
    <div>
       { localApi.map((task)=>{
        return(
          <div className='listOfTodo'>
            <input type="checkbox" className='checkbox'></input>
            <h4>{task.name}</h4>

          </div>)
        })};

    </div>
    </>
  )
}

export default Todolist