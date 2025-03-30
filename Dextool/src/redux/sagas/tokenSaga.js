import { put, takeLatest } from "redux-saga/effects";
import { getData } from "../../utils/api";
import axios from "axios";

import {
  FETCH_TOKEN_LIST_REQUEST,
  fetchTokenListSuccess,
  fetchTokenListFail,
} from "../actions/tokenAction";

function* fetchTokenList() {
  try {
    // Make an API request to fetch token data
    const response = yield axios.get(
      "https://swap-api.thetatoken.org/swap/top-tokens"
    );
    const fetchedTokens = response.data.body.tokens.filter(
      (item) => item.totalLiquidityUSD * 1 > 0
    );
    const data = yield axios.get(
      "https://assets.thetatoken.org/wallet-metadata/v1/data.json"
    );

    const tokens = fetchedTokens.map((obj) => {
      const token =
        data.data.mainnet.tokens[
          Object.keys(data.data.mainnet.tokens).find(
            (id) => id.toLocaleLowerCase() === obj.id
          )
        ];

      if (token) {
        return { ...obj, logo: token.logo };
      }
      return obj;
    });
    yield put(fetchTokenListSuccess(tokens));
  } catch (error) {
    // Dispatch fail action with the error message
    yield put(fetchTokenListFail(error.message));
  }
}

// Watcher saga
function* tokenSaga() {
  yield takeLatest(FETCH_TOKEN_LIST_REQUEST, fetchTokenList);
}

export default tokenSaga;
