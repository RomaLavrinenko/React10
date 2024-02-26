import {GetTodo, GetComment , GetAlbom} from '../../../Components/service/ApiService'

const componentsActionType = {
    SET_TODOS: 'SET_TODOS',
    SET_ALBUMS: 'SET_ALBUMS',
    SET_COMMENTS: 'SET_COMMENTS',
};

export  const componentsAllAction = {
    setTodos : (todos) => ({type: componentsActionType.SET_TODOS, payload: todos}),
    setAlbums : (albums) => ({type: componentsActionType.SET_ALBUMS, payload: albums}),
    setComments : (comments) => ({type: componentsActionType.SET_COMMENTS, payload: comments}),
};


export const getTodosThunk = () => (dispatch) =>{
    GetTodo.handleTodo(dispatch);
}

export const getAlbumsThunk = () => (dispatch) =>{
    GetAlbom.handleAlbom(dispatch);
}

export const getCommentsThunk = () => (dispatch) =>{
    GetComment.handleComment(dispatch);
}

export default componentsActionType;

