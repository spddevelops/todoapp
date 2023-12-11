import TodoCreate from "./TodoCreate";
import TodoFilterSortContainer from "./TodoFilterSortContainer";
import TodoList from "./TodoList";

const TodoContainer = () => {
  return (
    <div className="px-4 max-w-[560px] m-auto">
      <TodoCreate />
      <TodoFilterSortContainer />
      <TodoList />
    </div>
  );
};

export default TodoContainer;
