import { applyMiddleware, combineReducers, createStore } from "redux";
import {composeWithDevTools} from '@redux-devtools/extension';
import todosReducers from "./reducers/todosReducers";
import albumsReducers from './reducers/albumsReducers';
import commentsRedecers from './reducers/commentsRedecers';
import {thunk} from 'redux-thunk';

const rootReducer = combineReducers({
    todosReducers: todosReducers,
    albumsReducers: albumsReducers,
    commentsRedecers: commentsRedecers,
})

const composeEnhansers = composeWithDevTools({
    trace: true,
    traceLimit: 25
})
const store = createStore(rootReducer, composeEnhansers(applyMiddleware(thunk)));;

export default store;