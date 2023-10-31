import React, { useEffect, useState } from "react";
import "./style.css";
import axios from "axios";
import {
  BsCircleFill,
  BsFillCheckCircleFill,
  BsFillTrashFill,
} from "react-icons/bs";

function StatusList() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/get")
      .then((result) => setTodos(result.data))
      .catch((err) => console.log(err));
  }, []);

  const handleEditToTrue = (id) => {
    axios
      .put("http://localhost:3001/updateToTrue/" + id)
      .then((result) => 
        location.reload()
      )
      .catch((err) => console.log(err));
  };

  const handleEditToFalse = (id) => {
    axios
      .put("http://localhost:3001/updateToFalse/" + id)
      .then((result) => 
        location.reload()
      )
      .catch((err) => console.log(err));
  };

  const handleDelete = (id) => {
    axios
      .delete("http://localhost:3001/delete/" + id)
      .then(result => {
        location.reload()
      }
      )
      .catch((err) => console.log(err));
  }

  return (
    <div className="status">
      {todos.length === 0 ? (
        <div>
          <h2>All tasks done!</h2>
        </div>
      ) : (
        todos.map((todo) => (
          <div className="todo-list">
            <div className="check-box" >
              {todo.status ? (
                <BsFillCheckCircleFill className="icon" onClick={() => handleEditToFalse(todo._id)}/>
              ) : (
                <BsCircleFill className="icon" onClick={() => handleEditToTrue(todo._id)}/>
              )}
              <p className = {todo.status ? "line-through" : ""}>{todo.text}</p>
            </div>
            <div>
              <span>
                <BsFillTrashFill className="icon" onClick={()=> handleDelete(todo._id)}/>
              </span>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default StatusList;
