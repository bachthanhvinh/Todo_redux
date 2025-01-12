import { useSelector } from "react-redux";
import "./TodoStyle.scss";
import { FaCheck, FaX } from "react-icons/fa6";

export const TodoList = () => {
  const todos = useSelector((state) => state.todoReduce);
  console.log(todos);
  return (
    <>
      {todos.map((item) => (
        <div key={item.id} className="product__item">
          {item.content}
          <div className="product__icons">
            <button>
              <FaCheck />
            </button>
            <button>
              <FaX />
            </button>
          </div>
        </div>
      ))}
    </>
  );
};
