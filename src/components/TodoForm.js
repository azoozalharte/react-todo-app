import { useState } from "react";
import Todos from "./Todos";

export default function TodoForm() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [edit, setEdit] = useState(false);
  const [todoEdit, setTodoEdit] = useState([]);
  function handleClick() {
    if (edit === true) {
      console.log(todoEdit.id);
      setTodos(
        todos.map((todoMap) => {
          console.log(`todomap id ${todoMap}`);
          if (todoMap.id === todoEdit[0].id) {
            return { ...todoMap, title: todo };
          } else {
            return todoMap;
          }
        })
      );
      setEdit(false);
      setTodo("");
      setTodoEdit([]);
      console.log(todos);
      return 0;
    }

    if (todo !== "" && edit === false) {
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
          return null;
        }
      })
    );
  }

  function handleEdit(id) {
    setEdit(true);
    todos.map((todoEditMap) => {
      if (todoEditMap.id === id) {
        setTodoEdit([...todoEdit, todoEditMap]);
        setTodo(todoEditMap.title);
        return -1;
      }

      return -1;
    });
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
        {edit ? (
          <button className="add-button" onClick={handleClick}>
            تعديل
          </button>
        ) : (
          <button className="add-button" onClick={handleClick}>
            حفظ
          </button>
        )}
      </div>
      <Todos
        todos={todos}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      />
    </div>
  );
}
