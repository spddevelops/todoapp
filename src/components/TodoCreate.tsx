import { useAtom } from "jotai";
import { todosAtom } from "../store/jotai/todos";
import { useState } from "react";

const TodoCreate = () => {
  const [, setTodos] = useAtom(todosAtom);
  const [inputTextValue, setInputTextValue] = useState("");
  const handleOnSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputTextValue.trim() === "") {
      return;
    }
    setTodos(todos => [
      ...todos,
      {
        id: todos.length + 1,
        title: inputTextValue.trim(),
        completed: false,
        createdAt: new Date(),
      }
    ]);
    setInputTextValue("");
  };
  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <input
          name="addTodo"
          type="text"
          placeholder="Add Todo"
          className="text-black rounded-full p-3 pl-6 w-full"
          value={inputTextValue}
          onChange={(e) => setInputTextValue(e.target.value)}
        />
      </form>
    </div>
  );
};

export default TodoCreate;
