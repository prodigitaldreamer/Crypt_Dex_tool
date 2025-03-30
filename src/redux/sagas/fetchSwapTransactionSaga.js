import { put, takeLatest } from 'redux-saga/effects';
import { getData } from '../../utils/api';
import axios from 'axios';

import { 
    FETCH_SWAP_TRANSACTION_LIST_REQUEST,
    fetchSwapTransactionListSuccess,
    fetchSwapTransactionListFail
 } from '../actions/fetchSwapTrasactionAction';

function* fetchSwapTransactionList() {
  try {
    // Make an API request to fetch token data
    const response = yield axios.get("https://swap-api.thetatoken.org/swap/pair/0x2356d65ba95e9b8cbf5ff88841cb5a371dd6ec6a/transactions");

    // Dispatch success action with the received data
    yield put(fetchSwapTransactionListSuccess(response.data.body.transactions));
  } catch (error) {
    // Dispatch fail action with the error message
    yield put(fetchSwapTransactionListFail(error.message));
  }
}

// Watcher saga
function* swapTransactionSaga() {
  yield takeLatest(FETCH_SWAP_TRANSACTION_LIST_REQUEST, fetchSwapTransactionList);
}

export default swapTransactionSaga;
