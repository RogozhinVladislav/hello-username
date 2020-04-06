import {
  FETCH_USERS,
  SET_USERS,
  FETCH_USERS_FAILURE,
  DELETE_USER_SUCCESS,
} from "../actions";

const initialState = {
  loading: false,
  users: [],
};

export default function toDoApp(state = initialState, action) {
  switch (action.type) {
    case FETCH_USERS:
      return {
        ...state,
        loading: true,
      };
    case SET_USERS:
      return {
        ...state,
        users: action.payLoad,
        loading: false,
      };
    case FETCH_USERS_FAILURE:
      return {
        ...state,
        users: action.payLoad,
        loading: false,
      };
    case DELETE_USER_SUCCESS:
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.payLoad),
      };
    default:
      return state;
  }
}
