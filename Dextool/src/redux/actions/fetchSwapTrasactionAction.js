// Action Type
export const FETCH_SWAP_TRANSACTION_LIST_REQUEST = "FETCH_SWAP_TRANSACTION_LIST_REQUEST";
export const FETCH_SWAP_TRANSACTION_LIST_SUCCESS = "FETCH_SWAP_TRANSACTION_LIST_SUCCESS";
export const FETCH_SWAP_TRANSACTION_LIST_FAIL = "FETCH_SWAP_TRANSACTION_LIST_FAIL";

// Action Creators
export const fetchSwapTransactionListRequest = () => ({
  type: FETCH_SWAP_TRANSACTION_LIST_REQUEST,
});

export const fetchSwapTransactionListSuccess = (data) => ({
  type: FETCH_SWAP_TRANSACTION_LIST_SUCCESS,
  payload: data,
});

export const fetchSwapTransactionListFail = (error) => ({
  type: FETCH_SWAP_TRANSACTION_LIST_FAIL,
  payload: error,
});
