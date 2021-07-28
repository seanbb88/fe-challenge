import { call, put, takeEvery, all, select } from 'redux-saga/effects';


export function* getPartsListSaga (action: any) {
  try {
    const response = ''; 
    return response

  } catch (e) {
    console.log(e)
  }
}

function* watchGetPartsListSaga () {
 // yield takeEvery(GET_CONTRACTS_BY_PRODUCT, getContractsByProductSaga);
}

export default function* watchAllPartsList () {
  yield all([
    watchGetPartsListSaga()
  ])
}
