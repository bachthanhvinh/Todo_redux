import { useDispatch, useSelector } from "react-redux";
import "./TodoStyle.scss";
import { FaCheck, FaUniregistry, FaX } from "react-icons/fa6";
import { todoHandle, undoHandle } from "../../action/todos";

function TodoList() {
  const todos = useSelector((state) => state.todoReduce);
  if (!Array.isArray(todos)) {
    console.error("Todos is not an array:", todos);
    return <p>Loading todos...</p>;
  }
  console.log(todos);
  const dispatch = useDispatch();
  return (
    <>
      {todos.map((item) => (
        <div
          key={item.id}
          className={
            "product__item " + (item.completed && "product__item--completed")
          }
        >
          {item.content}
          <div className="product__icons">
            {item.completed ? (
              <button onClick={() => dispatch(undoHandle(item.id))}>
                <FaUniregistry />
              </button>
            ) : (
              <button onClick={() => dispatch(todoHandle(item.id))}>
                <FaCheck />
              </button>
            )}

            <button>
              <FaX />
            </button>
          </div>
        </div>
      ))}
    </>
  );
}

export default TodoList;
