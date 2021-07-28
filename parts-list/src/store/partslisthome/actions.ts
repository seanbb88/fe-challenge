import { ErrorModel } from "../common/types";
import { PartsListHomeActionTypes, UPDATE_PART_QTY, UPDATE_PART_QTY_FAILURE, UPDATE_PART_QTY_SUCCESS } from "./constants"
import { 
    GET_PARTS_LIST, 
    GET_PARTS_LIST_SUCCESS, 
    GET_PARTS_LIST_FAILURE, 
    UPDATE_PAGE_NUMBER
    } 
from './constants'; 
import { PartsListResponse } from "./types";


export function getPartsList (): PartsListHomeActionTypes {
  return {
    type:  GET_PARTS_LIST
  }
}

export function getPartsListSuccess (response: PartsListResponse): PartsListHomeActionTypes {
  return {
    type: GET_PARTS_LIST_SUCCESS, 
    payload: response
  }
}

export function getPartsListFailure (errorModel: ErrorModel): PartsListHomeActionTypes {
  return {
    type: GET_PARTS_LIST_FAILURE, 
    payload: errorModel
  }
}

export function updatePageNumber (pageNumber: number): PartsListHomeActionTypes {
  return {
    type: UPDATE_PAGE_NUMBER, 
    payload: pageNumber
  }
}

export function updatePartQuantity (id: number, quantity: number, partName: string): PartsListHomeActionTypes {
  return {
    type: UPDATE_PART_QTY, 
    payload: { id, quantity, partName }
  }
}

export function updatePartQuantitySuccess (id: number, quantity: number, partName: string): PartsListHomeActionTypes {
  return {
    type: UPDATE_PART_QTY_SUCCESS, 
    payload: { id , quantity, partName }
  }
}

export function updatePartQuantityFailure (errorModel: ErrorModel): PartsListHomeActionTypes {
  return {
    type: UPDATE_PART_QTY_FAILURE, 
    payload: errorModel
  }
}