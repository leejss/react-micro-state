import { useTodoStore } from "../store/todoStore";

const TodoList = () => {
  const todos = useTodoStore((state) => state.todos);
  const checkTodo = useTodoStore((state) => state.checkTodo);
  const deleteTodo = useTodoStore((state) => state.deleteTodo);

  if (todos.length === 0) return <h1>Empty</h1>;
  return (
    <div>
      <ul>
        {todos.map((t) => (
          <li key={t.id}>
            {t.content}
            <input
              type="checkbox"
              checked={t.done}
              onChange={() => {
                checkTodo(t.id);
              }}
            />
            <button
              onClick={() => {
                deleteTodo(t.id);
              }}
            >
              Delete This
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
