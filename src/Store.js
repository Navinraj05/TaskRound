// src/store.js
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './Reducers'; // create this file

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
