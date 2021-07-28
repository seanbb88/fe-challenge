export const GET_PARTS_LIST = 'GET_PARTS_LIST'
export const GET_PARTS_LIST_SUCCESS = 'GET_PARTS_LIST_SUCCESS'
export const GET_PARTS_LIST_FAILURE = 'GET_PARTS_LIST_FAILURE'



interface GetPartsListAction {
  type: typeof GET_PARTS_LIST
}

interface GetPartsListSuccessAction {
  type: typeof GET_PARTS_LIST_SUCCESS,
  payload: any
}

interface GetPartsListFailureAction {
  type: typeof GET_PARTS_LIST_FAILURE,
  payload: any
}



export type PartsListHomeActionTypes =
    GetPartsListAction |
    GetPartsListSuccessAction |
    GetPartsListFailureAction; 
