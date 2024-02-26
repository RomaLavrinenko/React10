import  componentsAction  from "./action/componentsAction"

const initialState = {
    albums: []
}

const albumsReducers = (state = initialState,actino) =>{
    switch(actino.type){
        case componentsAction.SET_ALBUMS:
            return{
                ...state,
                albums: actino.payload
            }
            default :
                return state
    }
}

export default albumsReducers;