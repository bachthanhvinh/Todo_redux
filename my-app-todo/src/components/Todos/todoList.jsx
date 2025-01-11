import { useSelector } from "react-redux";

export const TodoList = () => {
  const todos = useSelector((state) => state.todoReduce);
  console.log(todos);
  return (
    <>
      <h2>todolist</h2>
    </>
  );
};
