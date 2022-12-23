export default function Todos({ todos, handleDelete }) {
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
            </div>
          ))}
        </ul>
      )}
    </div>
  );
}
