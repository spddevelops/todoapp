import { Todo } from "../store/jotai/todos";

export interface LocalStorageTodo extends Omit<Todo,'createdAt'> {
  createdAt: string
}

const TODO_ITEM_KEY = "todoapp-todos";

export const getLocalTodos = (key=TODO_ITEM_KEY): Array<LocalStorageTodo> => {
  return JSON.parse(localStorage.getItem(key) || "[]");
};
export const storeLocalTodos = (todos: Todo[], key=TODO_ITEM_KEY) => {
  localStorage.setItem(key, JSON.stringify(todos));
}
