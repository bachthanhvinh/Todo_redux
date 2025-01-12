import { FaPlus } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { createTodo } from "../../action/todos";
import { useEffect, useRef } from "react";

function TodoInput() {
  const dispatch = useDispatch();

  const inputFocus = useRef();

  useEffect(() => {
    inputFocus.current.focus();
  }, []);

  const HandleSubmit = (e) => {
    e.preventDefault();
    const value = e.target.elements.todoInput.value;
    if (value !== "") {
      dispatch(createTodo(value));
      inputFocus.current.focus();
      inputFocus.current.value = "";
    }
  };
  return (
    <>
      <form onSubmit={HandleSubmit}>
        <input
          ref={inputFocus}
          type="text"
          name="todoInput"
          className="product__input"
        />
        <button type="submit" className="createtodo">
          <FaPlus />
        </button>
      </form>
    </>
  );
}

export default TodoInput;
