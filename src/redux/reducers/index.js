import { combineReducers } from 'redux';
import tokenReducer from './tokenReducer';
import swapTransactionReducer from './fetchSwapTransactionReducer';

const rootReducer = combineReducers({
  tokenReducer, // Add your reducers here
  swapTransactionReducer
});

export default rootReducer;