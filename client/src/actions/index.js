export const FETCH_USERS = "FETCH_USERS";
export const SET_USERS = "SET_USERS";
export const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE";

export const DELETE_USER = "DELETE_USER";
export const DELETE_USER_SUCCESS = "DELETE_USER_SUCCESS";
export const DELETE_USER_FAILURE = "DELETE_USER_FAILURE";

export const LOGIN = "LOGIN";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const REGISTER = "REGISTER";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILURE = "REGISTER_FAILURE";

export function fetchUsers() {
  return {
    type: FETCH_USERS,
  };
}

export function setUsers(payLoad) {
  return {
    type: SET_USERS,
    payLoad,
  };
}

export function fetchUsersFailure() {
  return {
    type: FETCH_USERS_FAILURE,
  };
}

export function deleteUser(payLoad) {
  return {
    type: DELETE_USER,
    payLoad,
  };
}

export function deleteUserSuccess(payLoad) {
  return {
    type: DELETE_USER_SUCCESS,
    payLoad,
  };
}

export function deleteUserFailure() {
  return {
    type: DELETE_USER_FAILURE,
  };
}

export function login(payLoad) {
  return {
    type: LOGIN,
    payLoad,
  };
}

export function loginSuccess() {
  return {
    type: LOGIN_SUCCESS,
  };
}

export function loginFailure() {
  return {
    type: LOGIN_FAILURE,
  };
}

export function register(payLoad) {
  return {
    type: REGISTER,
    payLoad,
  };
}

export function registerSuccess() {
  return {
    type: REGISTER_SUCCESS,
  };
}

export function registerFailure() {
  return {
    type: REGISTER_FAILURE,
  };
}
