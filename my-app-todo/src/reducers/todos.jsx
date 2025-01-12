const init = [
  {
    id: 1,
    content: "Công việc 1",
    completed: true,
  },
  {
    id: 2,
    content: "Công việc 2",
    completed: false,
  },
  {
    id: 3,
    content: "Công việc 3",
    completed: false,
  },
];

const todoReduce = (state = init, action) => {
  let newState = [...state];
  switch (action.type) {
    case "CREATETODO":
      newState = [
        ...state,
        {
          id: Date.now(),
          content: action.content,
          completed: false,
        },
      ];
      return newState;

    case "TODOHANDLE":
      const index = newState.findIndex((item) => {
        return item.id === action.id;
      });
      newState[index].completed = true;
      return newState;
    case "UNDOHANDLE":
      const undoindex = newState.findIndex((item) => {
        return item.id === action.id;
      });
      newState[undoindex].completed = false;
      return newState;
    default:
      return state;
  }
};

export default todoReduce;
