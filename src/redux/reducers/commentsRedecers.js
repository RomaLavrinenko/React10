import   componentsAction from "./action/componentsAction"

const initialState = {
    comments: []
}

const commentsReducers = (state = initialState,actino) =>{
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