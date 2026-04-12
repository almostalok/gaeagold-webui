import { all, call } from 'redux-saga/effects';
import appSaga from './appSaga'; // path to your appSaga

export default function* rootSaga() {
  yield all([
    call(appSaga), 
    // call(otherSaga),
  ]);
}