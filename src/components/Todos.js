export default function Todos({ todos, handleDelete, handleEdit }) {
  return (
    <div>
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
              <button
                className="add-button"
                onClick={() => handleEdit(todo.id)}
              >
                تعديل
              </button>
            </div>
          ))}
        </ul>
      )}
    </div>
  );
}
