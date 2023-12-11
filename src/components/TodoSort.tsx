import { useAtom } from "jotai";
import { SortOrder, todoSortingAtom } from "../store/jotai/sorting";

const TodoSort = () => {
  const [sortOrder, setSortOrder] = useAtom(todoSortingAtom);
  const getActiveClasses = (currentSortOrder: SortOrder) => {
    return sortOrder === currentSortOrder
      ? "text-white bg-purple-600"
      : "text-black bg-white";
  };
  return (
    <div
      className="inline-flex rounded-md shadow-sm text-white"
      role="group"
    >
      <button
        type="button"
        className={`${
          getActiveClasses(SortOrder.Newest)
        } px-4 py-2 text-sm font-medium border border-gray-200 rounded-s-lg`}
        onClick={() => setSortOrder(SortOrder.Newest)}
      >
        Newest
      </button>
      <button
        type="button"
        className={`${
          getActiveClasses(SortOrder.Oldest)
        } px-4 py-2 text-sm font-medium border border-gray-200 rounded-e-lg `}
        onClick={() => setSortOrder(SortOrder.Oldest)}
      >
        Oldest
      </button>
    </div>
  );
};

export default TodoSort;
