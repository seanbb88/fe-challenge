
import { PartsListHomeActionTypes,
  GET_PARTS_LIST,
  GET_PARTS_LIST_SUCCESS,
  GET_PARTS_LIST_FAILURE,
} from './constants';
import { PartsListHomeState } from './types';

const initialState: PartsListHomeState = {
    partsListModel: {
        partsList: [],
        currentPage: 1,
        totalCount: 0,
        currentApiPage: 1,
        isLoading: false,
        errorText: '',
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
        partsListModel: {
            ...state.partsListModel,
            isLoading: true, 
            errorText: ''
        }
      }
    case GET_PARTS_LIST_SUCCESS:
      return {
        ...state,
        partsListModel: {
            ...state.partsListModel,
            partsList: action.payload,
            isLoading: false, 
            errorText: ''
        }
      }
    case GET_PARTS_LIST_FAILURE:
      return {
        ...state,
        partsListModel: {
            ...state.partsListModel,
            isLoading: false, 
            errorText: action.payload
        }
      }
    default:
      return state
  }
}
