import React from 'react'
import "./App.css"
import Header from './Header'
import Todolist from './Todolist'

const App = () => {
  return (
    <>
    <div className='daddyDiv'>
    <div className='mainTodoDiv'>
    <Header></Header>
    <Todolist></Todolist>
    </div>
    </div>
    </>
  )
}

export default App