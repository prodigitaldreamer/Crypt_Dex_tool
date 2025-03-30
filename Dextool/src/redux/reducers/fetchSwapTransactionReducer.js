import {
  FETCH_SWAP_TRANSACTION_LIST_REQUEST,
  FETCH_SWAP_TRANSACTION_LIST_SUCCESS,
  FETCH_SWAP_TRANSACTION_LIST_FAIL,
} from '../actions/fetchSwapTrasactionAction';

const initialState = {
  loading: false,
  swapTransactionList: [],
  error: null,
};

const swapTransactionReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SWAP_TRANSACTION_LIST_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_SWAP_TRANSACTION_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        swapTransactionList: action.payload,
      };
    case FETCH_SWAP_TRANSACTION_LIST_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default swapTransactionReducer;
