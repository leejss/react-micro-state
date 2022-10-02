import AddTodo from "../components/AddTodo";
import TodoList from "../components/TodoList";

const HomePage = () => {
  return (
    <div>
      <TodoList />
      <AddTodo />
    </div>
  );
};

export default HomePage;
