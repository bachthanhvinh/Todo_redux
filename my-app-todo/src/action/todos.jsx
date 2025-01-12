export const createTodo = (value) => {
  return {
    type: "CREATETODO",
    content: value,
  };
};

export const todoHandle = (id) => {
  return {
    id: id,
    type: "TODOHANDLE",
  };
};

export const undoHandle = (id) => {
  return {
    id: id,
    type: "UNDOHANDLE",
  };
};
