import { PropertiesTypes } from "../store"
import   componentsAction, { componentsAllAction } from "./action/componentsAction"

export interface IntComments  {
    comment: any
    postId: number,
    id: number,
    name: string,
    email: string,
    body: string
}


export interface InitialStateComments {
    comments: IntComments[] | [],
}

const initialState:InitialStateComments  = {
    comments: []
}

export type CommentsActionType = ReturnType<PropertiesTypes<typeof componentsAllAction>>


const commentsReducers = (state = initialState,actino:CommentsActionType) =>{
    switch(actino.type){
        case componentsAction.SET_COMMENTS:
            return{
                ...state,
                comments: actino.payload
            }
            default :
                return state
    }
}

export default commentsReducers;