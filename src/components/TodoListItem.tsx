import { Todo as TodoType } from "../store/jotai/todos.ts";

interface Props extends TodoType {
  handleTodoCompleted: (id: number) => void;
  handleTodoDelete: (id: number) => void;
}

const TodoListItem = (props: Props) => {
  const { id, title, completed, handleTodoCompleted, handleTodoDelete } = props;
  return (
    <div className="my-2 p-3 rounded-md bg-purple-500 flex flex-row items-center hover:bg-purple-400">
      <div className="">
        <input
          type="checkbox"
          className="w-5 h-5 mt-1 float-left text-sm text-blue-600 bg-gray-100 border-gray-300 rounded cursor-pointer"
          checked={completed}
          onChange={() => handleTodoCompleted(id)}
          id={`todo-${id}`}
        />
      </div>
      <div
        className="cursor-pointer w-full ml-4"
        onClick={() => handleTodoCompleted(id)}
      >
        <label
          htmlFor={`todo-${id}`}
          className={`${
            completed ? "line-through" : ""
          } text-lg cursor-pointer`}
        >
          {title}
        </label>
      </div>
      <button
        className="float-right cursor-pointer font-bold hover:text-red-600 focus:text-red-600"
        onClick={() => handleTodoDelete(id)}
        role="button"
      >
        &#10005;
      </button>
    </div>
  );
};

export default TodoListItem;
