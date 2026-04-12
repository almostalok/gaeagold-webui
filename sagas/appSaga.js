import { put, takeLatest, call, select } from 'redux-saga/effects';

import { appActions } from '../stores/appSlice';
import {
  GET_MENU_SAGA_REQUESTING,
  GET_USER_DETAILS_SAGA_REQUESTING,
  GET_MENU_ERROR,
  GET_USER_DETAILS_SUCCESS,
  GET_USER_DETAILS_ERROR,
  GET_MENU_SUCCESS,
} from '../constants/actionTypes';
import { getAuthData } from '../stores/appSelector';

const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

export function* menuWatcher() {
  try {
    // make api call here
    const authData = yield select(getAuthData);
    if (authData !== null) {
      // const data = yield call(fetch, `${AppUtils.getBaseURL()}/navmenu`, {
      //   method: "POST",
      //   headers,
      //   body: JSON.stringify(authData.username),
      // });
      const data = [];
      yield put(appActions[GET_MENU_SUCCESS](data));
    }
  } catch (e) {
    console.error(e);
    yield put(appActions[GET_MENU_ERROR]());
  }
}

export function* userWatcher() {
  try {
    const authData = yield select(getAuthData);
    if (authData !== null) {
      // const data = yield call(fetch, `${AppUtils.getBaseURL()}/userinfo`, {
      //   method: "POST",
      //   headers,
      //   body: JSON.stringify(authData.username),
      // });
      const data = {};
      yield put(appActions[GET_USER_DETAILS_SUCCESS]({ name: data.user, image: data.userPic }));
    }
  } catch (e) {
    yield put(appActions[GET_USER_DETAILS_ERROR]());
  }
}

export default function* appWatcher() {
  yield takeLatest(GET_MENU_SAGA_REQUESTING, menuWatcher);
  yield takeLatest(GET_USER_DETAILS_SAGA_REQUESTING, userWatcher);
}
