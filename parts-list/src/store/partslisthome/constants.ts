import { ErrorModel } from "../common/types";
import { PartsListResponse } from "./types";

export const GET_PARTS_LIST = 'GET_PARTS_LIST'
export const GET_PARTS_LIST_SUCCESS = 'GET_PARTS_LIST_SUCCESS'
export const GET_PARTS_LIST_FAILURE = 'GET_PARTS_LIST_FAILURE'

export const UPDATE_PAGE_NUMBER = 'UPDATE_PAGE_NUMBER'; 

export const UPDATE_PART_QTY = 'UPDATE_PART_QTY'; 
export const UPDATE_PART_QTY_SUCCESS = 'UPDATE_PART_QTY_SUCCESS'; 
export const UPDATE_PART_QTY_FAILURE = 'UPDATE_PART_QTY_FAILURE'; 

interface GetPartsListAction {
  type: typeof GET_PARTS_LIST
}

interface GetPartsListSuccessAction {
  type: typeof GET_PARTS_LIST_SUCCESS,
  payload: PartsListResponse
}

interface GetPartsListFailureAction {
  type: typeof GET_PARTS_LIST_FAILURE,
  payload: ErrorModel
}

interface UpdatePageNumberAction {
  type: typeof UPDATE_PAGE_NUMBER, 
  payload: number
}

interface UpdatePartQtyAction {
  type: typeof UPDATE_PART_QTY, 
  payload: {
    id: number, 
    quantity: number, 
    partName: string
  }
}

interface UpdatePartQtySuccessAction {
  type: typeof UPDATE_PART_QTY_SUCCESS, 
  payload: {
    id: number, 
    quantity: number, 
    partName: string
  }
}

interface UpdatePartQtyFailureAction {
  type: typeof UPDATE_PART_QTY_FAILURE, 
  payload: ErrorModel
}


export type PartsListHomeActionTypes =
    GetPartsListAction |
    GetPartsListSuccessAction |
    GetPartsListFailureAction |
    UpdatePageNumberAction |
    UpdatePartQtyAction |
    UpdatePartQtySuccessAction|
    UpdatePartQtyFailureAction; 
