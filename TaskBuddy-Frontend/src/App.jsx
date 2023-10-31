import React from "react"
import './Components/style.css'
import Todo from "./Components/Todo"
import StatusList from "./Components/StatusList"
import './App.css'

function App() {

  return (
    <div className="App-parent">
      <Todo/>
      <StatusList/>
      <div className="bg">To-Dos</div>
    </div>
  )
}

export default App
