
import { PartsListHomeActionTypes,
  GET_PARTS_LIST,
  GET_PARTS_LIST_SUCCESS,
  GET_PARTS_LIST_FAILURE,
  UPDATE_PAGE_NUMBER,
  UPDATE_PART_QTY_SUCCESS,
  UPDATE_PART_QTY_FAILURE,
} from './constants';
import { PartsListHomeState } from './types';

const initialState: PartsListHomeState = {
    partsListHome: {
        partsList: [],
        totalCount: 0, 
        currentPage: 1,
        pageSize: 5,
        isLoading: false,
        isError: false,
    }, 
    updatedQuantityModel : {
      id: -1, 
      quantity: 0, 
      partName: ''
    }
};

export function partsListHomeReducer (
  state = initialState,
  action: PartsListHomeActionTypes
): PartsListHomeState {
  switch (action.type) {
    case GET_PARTS_LIST:
      return {
        ...state, 
        partsListHome: {
            ...state.partsListHome,
            isLoading: true, 
            isError: false
        }
      }
    case GET_PARTS_LIST_SUCCESS:
      return {
        ...state,
        partsListHome: {
            ...state.partsListHome,
            partsList: action.payload.partsList,
            totalCount: action.payload.totalCount, 
            currentPage: action.payload.currentPage,
            pageSize: action.payload.pageSize,
            isLoading: false, 
            isError: false
        }
      }
    case GET_PARTS_LIST_FAILURE:
      return {
        ...state,
        partsListHome: {
            ...state.partsListHome,
            isLoading: false, 
            isError: true
        }
      }
    case UPDATE_PAGE_NUMBER: 
      return {
        ...state, 
        partsListHome: {
          ...state.partsListHome, 
          currentPage: action.payload
        }, 
        updatedQuantityModel: initialState.updatedQuantityModel
      }

    case UPDATE_PART_QTY_SUCCESS: 
      return {
        ...state, 
        updatedQuantityModel: action.payload
      }

    case UPDATE_PART_QTY_FAILURE: 
      return {
        ...state, 
        partsListHome: {
          ...state.partsListHome, 
          isError: true
        }
      }
    default:
      return state
  }
}
