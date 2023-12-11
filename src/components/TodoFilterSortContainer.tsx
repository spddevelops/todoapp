import TodoFilters from "./TodoFilters";
import TodoSort from "./TodoSort";

const TodoFilterSortContainer = () => {
  return (
    <div className="my-6 columns-1 sm:columns-2">
      <div className="w-full">
       <TodoSort />
      </div>
      <div className="w-full sm:mt-0 mt-4">
        <TodoFilters />
      </div>
    </div>
  );
};

export default TodoFilterSortContainer;
