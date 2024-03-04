import { PropertiesTypes } from "../store"
import   componentsAction, { componentsAllAction } from "./action/componentsAction"

export interface IntTodos  {
    comment: any
    todo: any
    userId : number,
    id: number,
    title: string,
    completed: boolean
}


export interface InitialState {
    todos: IntTodos[] | [],
}

const initialState:InitialState = {
    todos: []
}

export type TodosActionType = ReturnType<PropertiesTypes<typeof componentsAllAction>>


const todosReducers = (state = initialState,actino:TodosActionType) =>{
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

