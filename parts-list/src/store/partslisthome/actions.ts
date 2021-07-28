import { PartsListHomeActionTypes } from "./constants"
import { 
    GET_PARTS_LIST, 
    GET_PARTS_LIST_SUCCESS, 
    GET_PARTS_LIST_FAILURE
    } 
from './constants'; 


export function getPartsList (): PartsListHomeActionTypes {
  return {
    type:  GET_PARTS_LIST
  }
}

export function getPartsListSuccess (response: any): PartsListHomeActionTypes {
  return {
    type: GET_PARTS_LIST_SUCCESS, 
    payload: response
  }
}

export function getPartsListFailure (errorModel: any): PartsListHomeActionTypes {
  return {
    type: GET_PARTS_LIST_FAILURE, 
    payload: errorModel
  }
}
