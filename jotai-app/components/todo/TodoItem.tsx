import { PrimitiveAtom, useAtom } from "jotai";
import { memo } from "react";

export type Todo = {
  text: string;
  done: boolean;
};

export type TodoAtom = PrimitiveAtom<Todo>;

interface TodoItemProps {
  todoAtom: TodoAtom;
  remove: (todoAtom: TodoAtom) => void;
}

const TodoItem = ({ todoAtom, remove }: TodoItemProps) => {
  const [todo, setTodo] = useAtom(todoAtom);
  return (
    <div>
      <label>
        <span
          style={{
            textDecoration: todo.done ? "line-through" : "",
          }}
        >
          {todo.text}
        </span>
        <input
          type="checkbox"
          value={todo.text}
          onChange={(e) => {
            setTodo({
              ...todo,
              done: e.currentTarget.checked,
            });
          }}
        />
      </label>
      <button
        onClick={() => {
          remove(todoAtom);
        }}
      >
        remove
      </button>
    </div>
  );
};

export default memo(TodoItem);
// export default TodoItem;
