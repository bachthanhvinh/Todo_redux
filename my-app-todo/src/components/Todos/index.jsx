import { TodoInput } from "./todoInput";
import { TodoList } from "./todoList";

function Todos() {
  return (
    <>
      <div className="product__list">
        <h1>TODO</h1>
        <TodoInput />
        <TodoList />
      </div>
    </>
  );
}

export default Todos;
