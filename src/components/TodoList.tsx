import TodoListItem from "./TodoListItem";
import { filteredAndSortedTodosAtom, todosAtom } from "../store/jotai/todos";
import { useAtom, useAtomValue } from "jotai/react";
import { useStoredTodos } from "../hooks/useStoredTodos";

const TodoList = () => {
  const [todos, setTodos] = useAtom(todosAtom);
  const filteredSortedTodos = useAtomValue(filteredAndSortedTodosAtom);
  useStoredTodos(todos, setTodos);

  const handleTodoCompleted = (id: number) => {
    setTodos((prevTodos) => [
      ...prevTodos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    ]);
  };

  const handleTodoDelete = (id: number) => {
    setTodos((prevTodos) => [
      ...prevTodos.filter((todo) => todo.id !== id),
    ]);
  };
  if (filteredSortedTodos.length === 0) {
    return (
      <div className="mt-4 min-h-[50vh] mx-auto text-center text-xl">
        No todos present.
      </div>
    );
  }
  return (
    <div className="mt-4 min-h-[50vh]">
      {filteredSortedTodos.map((todo) => {
        return (
          <TodoListItem
            key={todo.id}
            handleTodoCompleted={handleTodoCompleted}
            handleTodoDelete={handleTodoDelete}
            {...todo}
          />
        );
      })}
    </div>
  );
};

export default TodoList;
