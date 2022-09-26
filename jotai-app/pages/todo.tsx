import AddTodo from "../components/todo/AddTodo";
import TodoList from "../components/todo/TodoList";

const TodoPage = () => {
  return (
    <div>
      <TodoList />
      <AddTodo />
    </div>
  );
};

export default TodoPage;
