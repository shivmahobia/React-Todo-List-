import { useState } from "react";
import TodoForm from "./TodoForm";
import {v4 as uuidv4} from "uuid"

const TodoWrapper = () => {
  const [todos, settodos] = useState([])
  const addTodo = (todo) => {
    settodos([...todos, {id: uuidv4(), task: todo, completed: false,isEditing: false}])
  }
  return (
    <div className="TodoWrapper">
      <TodoForm addTodo={addTodo}/>
    </div>
  )
};

export default TodoWrapper;
