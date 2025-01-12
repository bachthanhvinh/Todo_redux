const init = [
  {
    id: 1,
    content: "Công việc 1",
    completed: false,
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
        },
      ];

      return newState;
    default:
      return state;
  }
};

export default todoReduce;
