/* eslint-disable @typescript-eslint/no-explicit-any */
import { call, put, takeEvery, all, select, delay } from 'redux-saga/effects';
import { fetchPartsList, updatePartsQty } from '../../api/partslisthome/PartsListHome';
import { ResponseGenerator } from '../common/types';
import { getPartsListFailure, getPartsListSuccess, updatePartQuantityFailure, updatePartQuantitySuccess } from './actions';
import { GET_PARTS_LIST, UPDATE_PART_QTY } from './constants';
import { getPartsListHomeState } from './selectors';
import { PartsListResponse } from './types';


export function* getPartsListSaga () {
  try {
    const { currentPage } = yield select(getPartsListHomeState); 
    const response:ResponseGenerator = yield call(fetchPartsList, currentPage)
    const totalCount = parseInt(response.headers["total-entries"]); 
    const page = parseInt(response.headers["page-number"]); 
    const pageSize = parseInt(response.headers["per-page"]); 
    const responseData: PartsListResponse = {
      partsList: response.data.data, 
      totalCount: totalCount, 
      currentPage: page, 
      pageSize: pageSize
    }
    yield delay(1000)
    yield put(getPartsListSuccess(responseData))
  } catch (e) {
    yield put(getPartsListFailure(e))
  }
}

export function* updatePartsQtySaga(action: any){
  try {
    const response:ResponseGenerator =  yield call(updatePartsQty, action.payload.id, action.payload.quantity)
    console.log(response)
    const updatedQuantity = response.data.data.quantity
    yield put(updatePartQuantitySuccess(action.payload.id ,updatedQuantity, action.payload.partName))
  } catch(e){
    yield put(updatePartQuantityFailure(e))
  }
}

function* watchGetPartsListSaga () {
  yield takeEvery(GET_PARTS_LIST, getPartsListSaga);
}

function* watchUpdatePartsQtySaga(){
  yield takeEvery(UPDATE_PART_QTY, updatePartsQtySaga)
}

export default function* watchAllPartsList () {
  yield all([
    watchGetPartsListSaga(), 
    watchUpdatePartsQtySaga()
  ])
}

