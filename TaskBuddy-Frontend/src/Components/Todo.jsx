import React, { useState } from "react";
import "./style.css";
import axios from 'axios'

function Todo() {
  const [text, setText] = useState("");

  const handleChange = e => {
    setText(e.target.value);
  };

  const handleAdd = () =>{
    axios.post('http://localhost:3001/add', {
      text : text
    })
    .then(location.reload())
    .catch(err=>console.log(err))
  }  

  return (
    <div>
      <div className="todo-box">
        <div className="task">
          <form>
            <input
              type="text"
              name="name"
              value={text}
              onChange={handleChange}
            />
            <input type="submit" value="Submit" onClick={handleAdd}/>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Todo;
