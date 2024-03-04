import { ThunkAction } from 'redux-thunk';
import {GetTodo, GetComment , GetAlbom} from '../../../Components/service/ApiService'
import { IntTodos } from '../todosReducers';
import { AppDispatch, AppStateType, PropertiesTypes } from '../../store';
import { IntComments } from '../commentsRedecers';
import { IntAlbums } from '../albumsReducers';



export enum componentsActionType {
    SET_TODOS = 'SET_TODOS',
    SET_ALBUMS = 'SET_ALBUMS',
    SET_COMMENTS = 'SET_COMMENTS',
};



export type componentsAllActionType = ReturnType<PropertiesTypes<typeof componentsAllAction>>

export type componentsAllThunkType = ThunkAction<Promise<void>,AppStateType,null,componentsAllActionType>

export  const componentsAllAction = {
    setTodos : (todos:IntTodos[]) => ({type: componentsActionType.SET_TODOS, payload: todos}),
    setAlbums : (albums:IntAlbums) => ({type: componentsActionType.SET_ALBUMS, payload: albums}),
    setComments : (comments:IntComments) => ({type: componentsActionType.SET_COMMENTS, payload: comments}),
};



export const getTodosThunk = (): componentsAllThunkType => async (dispatch: AppDispatch) => {
    await GetTodo.handleTodo(dispatch);
};


export const getAlbumsThunk = (): componentsAllThunkType => async (dispatch: AppDispatch) => {
    await GetAlbom.handleAlbom(dispatch);
};


export const getCommentsThunk = (): componentsAllThunkType => async (dispatch: AppDispatch) => {
    await GetComment.handleComment(dispatch);
};

export default componentsActionType;

