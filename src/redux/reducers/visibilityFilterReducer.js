import defaultState from "../defaultState/defaultState";
import { SET_VISIBILITY_FILTER } from "../actionTypes/actionTypes";

const visibilityFilterReducer = (
  prevState = defaultState.visibilityFilter,
  action
) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;

    default:
      return prevState;
  }
};

export default visibilityFilterReducer;
