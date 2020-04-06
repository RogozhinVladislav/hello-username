import { all, call, put, takeEvery } from "redux-saga/effects";
import {
  FETCH_USERS,
  LOGIN,
  REGISTER,
  DELETE_USER,
  deleteUserSuccess,
  deleteUserFailure,
  loginSuccess,
  loginFailure,
  registerSuccess,
  registerFailure,
  setUsers,
  fetchUsersFailure,
} from "../actions";
import * as usersApi from "../api/users";
import * as authApi from "../api/auth";
import { message } from 'antd';

export function* fetchUsersSaga() {
  try {
    const response = yield call(usersApi.fetchList);
    yield put(setUsers(response.data));
  } catch (error) {
    yield put(fetchUsersFailure(error));
  }
}

export function* deleteUserSaga({ payLoad }) {
  try {
    yield call(usersApi.remove, payLoad);
    yield put(deleteUserSuccess(payLoad));
  } catch (error) {
    yield put(deleteUserFailure(error));
  }
}

export function* loginSaga({ payLoad }) {
  const { values, authHook } = payLoad;
  try {
    const response = yield call(authApi.login, values);
    const { token, userId } = response.data;
    authHook.login(token, userId);
    yield put(loginSuccess());
  } catch (error) {
    message.error(error.response.data.message);
    yield put(loginFailure());
  }
}

export function* registerSaga({ payLoad }) {
  const { values, onSuccess } = payLoad;
  try {
    yield call(authApi.register, values);
    yield onSuccess();
    yield put(registerSuccess());
  } catch (error) {
    message.error(error.response.data.message);
    yield put(registerFailure());
  }
}

export function* UsersSaga() {
  yield takeEvery(FETCH_USERS, fetchUsersSaga);
  yield takeEvery(DELETE_USER, deleteUserSaga);
}

export function* AuthSaga() {
  yield takeEvery(LOGIN, loginSaga);
  yield takeEvery(REGISTER, registerSaga);
}

export default function* rootSaga() {
  yield all([UsersSaga(), AuthSaga()]);
}
