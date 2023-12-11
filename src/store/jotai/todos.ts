import { atom } from "jotai";
import { Filters, todoFilteringAtom } from "./filtering";
import { SortOrder, todoSortingAtom } from "./sorting";
export type Todo = {
  id: number;
  title: string;
  completed: boolean;
  createdAt: Date;
};

const initailTodos: Todo[] = [];
export const todosAtom = atom(initailTodos);

const getFilteredTodos = (todos: Todo[], todoFilter: Filters) => {
  if (todoFilter === Filters.Active) {
    return todos.filter((todo) => !todo.completed);
  } else if (todoFilter === Filters.Completed) {
    return todos.filter((todo) => todo.completed);
  }
  return todos;
};
const compareTodos = (t1: Todo, t2: Todo, reversed = false): number => {
  if (t1.completed == t2.completed) {
    if (reversed) {
      return t1.createdAt.getTime() - t2.createdAt.getTime();
    }
    return t2.createdAt.getTime() - t1.createdAt.getTime();
  }
  return t1.completed ? 1 : -1;
};
const getSortedTodos = (todos: Todo[], todoSort: SortOrder) => {
  if (todoSort === SortOrder.Oldest) {
    todos.sort((t1, t2) => compareTodos(t1, t2));
    return [...todos];
  }
  todos.sort((t1, t2) => compareTodos(t1, t2, true));
  return [...todos];
};
export const filteredAndSortedTodosAtom = atom((get) => {
  const currentFilteredTodos = getFilteredTodos(
    get(todosAtom),
    get(todoFilteringAtom),
  );
  return getSortedTodos(currentFilteredTodos, get(todoSortingAtom));
});
