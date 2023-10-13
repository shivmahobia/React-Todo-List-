import { useState } from "react";

const TodoForm = (addTodo) => {
  const [value, setvalue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(value);
  };
  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        placeholder="What is the task Today..?"
        onChange={(e) => setvalue(e.target.value)}
      />
      <button className="todo-btn" type="submit">
        Add Task
      </button>
    </form>
  );
};

export default TodoForm;
