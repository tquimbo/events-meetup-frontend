import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import reducer from './redux/reducer.ts';
import { searchReducer } from './redux/searchReducer.ts';
   
// import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
// import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    users: reducer,
    events: reducer,
    search: searchReducer,
  
 
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// const store = createStore(storereducer, composeEnhancer(applyMiddleware(thunk)))

const store = createStore(rootReducer, applyMiddleware(thunk));

export type RootState = ReturnType<typeof rootReducer>;