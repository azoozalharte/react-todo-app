import { useState } from "react";
import "./App.css";

function App() {
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
    <div className="App">
      <h1>دفتر المهام</h1>
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
      {todos.length >= 0 && (
        <ul className="todo-list">
          {todos.map((todo) => (
            <div className="todo" key={todo.id}>
              <li>{todo.title}</li>
              <button
                className="delete-button"
                onClick={() => handleDelete(todo.id)}
              >
                حذف
              </button>
            </div>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
