import { createStore } from 'redux';
import reducer from './components/reducers/reducer';

const initialState = {}

export default () => {
  return createStore(
    reducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    // applyMiddleware(...middleware) // to add other middleware
  )
}


