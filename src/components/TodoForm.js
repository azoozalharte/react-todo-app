import { useState } from "react";
import Todos from "./Todos";

export default function TodoForm() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  function handleClick() {
    if (todo !== "") {
      setTodos([
        ...todos,
        {
          id: Math.floor(Math.random() * 18343453457).toString(),
          title: todo,
        },
      ]);
      setTodo("");
    }
  }

  function handleDelete(id) {
    setTodos(
      todos.filter((todo) => {
        if (todo.id !== id) {
          return todo;
        } else {
          return;
        }
      })
    );
  }
  return (
    <div>
      <div className="input-wrapper">
        <input
          type="text"
          name="todo"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          placeholder="عنوان المهمه"
        />
        <button className="add-button" onClick={handleClick}>
          حفظ
        </button>
      </div>
      <Todos todos={todos} handleDelete={handleDelete} />
    </div>
  );
}
