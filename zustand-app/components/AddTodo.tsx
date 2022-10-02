import { useState } from "react";
import { useTodoStore } from "../store/todoStore";

const AddTodo = () => {
  const [content, setContent] = useState("");
  const addtodo = useTodoStore((state) => state.addTodo);
  return (
    <div>
      <input
        type="text"
        value={content}
        onChange={(e) => {
          setContent(e.target.value);
        }}
      />
      <button
        onClick={() => {
          addtodo({
            id: Date.now(),
            content,
            done: false,
          });
        }}
      >
        Add Todo
      </button>
    </div>
  );
};

export default AddTodo;
