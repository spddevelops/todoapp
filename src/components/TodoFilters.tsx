import { useAtom } from "jotai";
import { Filters, todoFilteringAtom } from "../store/jotai/filtering";

const TodoFilters = () => {
  const [filter, setFilter] = useAtom(todoFilteringAtom);
  const getActiveClasses = (currentFilter: Filters) => {
    return filter === currentFilter
      ? "text-white bg-purple-600"
      : "text-black bg-white";
  };
  return (
    <div className="text-start sm:text-end">
      <button
        type="button"
        className={`${
          getActiveClasses(Filters.All)
        } px-4 py-2 text-sm font-medium border border-gray-200 rounded-s-lg`}
        onClick={() => setFilter(Filters.All)}
      >
        All
      </button>
      <button
        type="button"
        className={`${
          getActiveClasses(Filters.Active)
        } px-4 py-2 text-sm font-medium border border-l border-r border-gray-200`}
        onClick={() => setFilter(Filters.Active)}
      >
        Active
      </button>
      <button
        type="button"
        className={`${
          getActiveClasses(Filters.Completed)
        } px-4 py-2 text-sm font-medium border border-gray-200 rounded-e-lg `}
        onClick={() => setFilter(Filters.Completed)}
      >
        Completed
      </button>
    </div>
  );
};

export default TodoFilters;
