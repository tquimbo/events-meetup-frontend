import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import reducer from './redux/reducer';
import { searchReducer } from './reducers/searchReducer';
   
// import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
// import thunk from 'redux-thunk';

const rootreducer = combineReducers({
    users: reducer,
    events: reducer,
    search: searchReducer,
  
 
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(rootreducer, composeEnhancer(applyMiddleware(thunk)))

export default store