import thunk from 'redux-thunk';
import authReducer from '../reducers/auth';
import transactionReducer from '../reducers/transaction';
import { applyMiddleware, compose, createStore, combineReducers } from 'redux'
import { routerMiddleware, connectRouter } from 'connected-react-router'
import {history} from './history';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer =   combineReducers({
  auth: authReducer,
  transaction: transactionReducer
});



export default () => {
  const store = createStore(
    rootReducer,
    composeEnhancers(
      applyMiddleware(thunk),
     
    )
  );
  if(module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers/index').default;

      store.replaceReducer(nextReducer);
    });
  }


  return store;
};
