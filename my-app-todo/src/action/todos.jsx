export const createTodo = (value) => ({
  type: "CREATETODO",
  content: value,
  completed: false,
});
