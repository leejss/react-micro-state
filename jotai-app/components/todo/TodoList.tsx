import { atom, useAtom } from "jotai";
import { useCallback } from "react";
import TodoItem, { TodoAtom } from "./TodoItem";

export const todoAtomsAtom = atom<TodoAtom[]>([]);

const TodoList = () => {
  const [todoAtoms, setTodoAtoms] = useAtom(todoAtomsAtom);
  const remove = useCallback(
    (todoAtom: TodoAtom) => {
      setTodoAtoms((prev) => prev.filter((item) => item !== todoAtom));
    },
    [setTodoAtoms]
  );
  return (
    <div>
      {todoAtoms.map((todoAtom) => {
        return (
          <TodoItem
            key={todoAtom.toString()}
            remove={remove}
            todoAtom={todoAtom}
          />
        );
      })}
    </div>
  );
};

export default TodoList;
