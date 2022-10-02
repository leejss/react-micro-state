import create from "zustand";

type Todo = {
  id: number;
  content: string;
  done: boolean;
};

type TodoStore = {
  todos: Todo[];
  addTodo: (newTodo: Todo) => void;
  deleteTodo: (todoId: number) => void;
  checkTodo: (todoId: number) => void;
};

export const useTodoStore = create<TodoStore>((set) => ({
  todos: [],
  addTodo: (newTodo) =>
    set((state) => ({
      todos: state.todos.concat(newTodo),
    })),
  deleteTodo: (id) =>
    set((state) => ({
      todos: state.todos.filter((item) => item.id !== id),
    })),
  checkTodo: (id) =>
    set((state) => ({
      todos: state.todos.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            done: !item.done,
          };
        } else return item;
      }),
    })),
}));
