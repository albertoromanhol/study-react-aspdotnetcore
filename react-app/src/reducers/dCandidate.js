import { ACTION_TYPE } from "../actions/dCandidate";

const initialState = {
  list: [],
};

export const dCandidate = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPE.FETCH_ALL:
      return {
        ...state,
        list: [...action.payload],
      };

    case ACTION_TYPE.CREATE:
      return {
        ...state,
        list: [...state.list, action.payload],
      };

    case ACTION_TYPE.UPDATE:
      return {
        ...state,
        list: state.list.map((x) =>
          x.id === action.payload.Id ? action.payload : x
        ),
      };

    case ACTION_TYPE.DELETE:
      return {
        ...state,
        list: state.list.filter((x) => x.id !== action.payload.Id),
      };

    default:
      return state;
  }
};
