import   componentsAction from "./action/componentsAction"

const initialState = {
    todos: []
}

const todosReducers = (state = initialState,actino) =>{
    switch(actino.type){
        case componentsAction.SET_TODOS:
            return{
                ...state,
                todos: actino.payload
            }
            default :
                return state
    }
}

export default todosReducers;

