import { all } from 'redux-saga/effects';
import watchAllPartsList from './partslisthome/sagas';


function* rootSaga () {
  yield all([
    watchAllPartsList()
  ])
}

export default rootSaga;
