import { applyMiddleware, combineReducers, createStore  } from "redux";
import {composeWithDevTools} from '@redux-devtools/extension';
import todosReducers from "./reducers/todosReducers";
import albumsReducers from './reducers/albumsReducers';
import commentsRedecers from './reducers/commentsRedecers';
import {thunk} from 'redux-thunk'; 

export type PropertiesTypes<T> = T extends { [key:string]: infer U}
    ? U
    : never;

const rootReducer = combineReducers({
    todosReducers: todosReducers,
    albumsReducers: albumsReducers,
    commentsRedecers: commentsRedecers,
})

const composeEnhancers = composeWithDevTools({
    trace: true,
    traceLimit: 25,
});


const store:any = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export type AppStateType = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store;