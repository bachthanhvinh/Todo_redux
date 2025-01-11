import { FaPlus } from "react-icons/fa6";

export const TodoInput = () => {
  return (
    <>
      <form>
        <input type="text" name="todoInput" />
        <button type="submit" className="createtodo">
          <FaPlus />
        </button>
      </form>
    </>
  );
};
