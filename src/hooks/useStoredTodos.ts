import { useEffect } from "react";
import { LocalStorageTodo, getLocalTodos, storeLocalTodos } from "../helpers/localstorage";
import { Todo } from "../store/jotai/todos";
import { SetStateAction } from "jotai";

// custom hook for get localstorage todos and also saving them to localstorage
export const useStoredTodos = (
  todos: Todo[],
  setTodos: (item: SetStateAction<Array<Todo>>) => void,
) => {
  useEffect(() => {
    const storedTodos = getLocalTodos();
    if (storedTodos?.length !== 0) {
      setTodos(storedTodos.map((t: LocalStorageTodo) => {
        return {
          id: t.id,
          title: t.title,
          completed: t.completed,
          createdAt: new Date(Date.parse(t.createdAt)),
        };
      }));
    }
  }, [setTodos]);
  useEffect(() => {
    storeLocalTodos(todos);
  }, [todos]);
};
