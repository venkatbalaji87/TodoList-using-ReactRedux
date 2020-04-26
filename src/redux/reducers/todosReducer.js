import defaultState from "../defaultState/defaultState";
import { ADD_TODO, TOGGLE_TODO } from "../actionTypes/actionTypes";

const todosReducer = (prevState = defaultState.todos, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...prevState,
        {
          text: action.text,
          completed: false
        }
      ];

    case TOGGLE_TODO:
      return prevState.map((item, itemIndex) => {
        if (action.index === itemIndex) {
          return {
            ...item,
            completed: !item.completed
          };
        }
        return item;
      });

    default:
      return prevState;
  }
};

export default todosReducer;
