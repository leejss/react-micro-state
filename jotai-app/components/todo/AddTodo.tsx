import { atom, useSetAtom } from "jotai";
import { useState } from "react";
import { Todo } from "./TodoItem";
import { todoAtomsAtom } from "./TodoList";

const AddTodo = () => {
  const setTodoAtoms = useSetAtom(todoAtomsAtom);
  const [text, setText] = useState("");

  const addTodo = () => {
    setTodoAtoms((prev) =>
      prev.concat(
        atom<Todo>({
          text,
          done: false,
        })
      )
    );
    setText("");
  };
  return (
    <div>
      <label>
        <input
          type="text"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
      </label>
      <button onClick={addTodo}>Add Todo</button>
    </div>
  );
};

export default AddTodo;
