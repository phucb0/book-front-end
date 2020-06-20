// import { configureStore, createStore } from '@reduxjs/toolkit';
// import counterReducer from '../features/counter/counterSlice';
import { createStore, compose, applyMiddleware } from 'redux'
import reducers from '../reducers';
import thunk from 'redux-thunk';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducers,
    composeEnhancer(applyMiddleware(thunk))
);

store.subscribe(() => {
    // console.log("Store changed:", store.getState());
})

export default store;