import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import reducer from './redux/reducer';
   
// import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
// import thunk from 'redux-thunk';

const storereducer = combineReducers({
    users: reducer,
    events: reducer,
  
 
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(storereducer, composeEnhancer(applyMiddleware(thunk)))

export default store