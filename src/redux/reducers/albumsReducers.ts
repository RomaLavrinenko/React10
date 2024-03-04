import { PropertiesTypes } from "../store"
import   componentsAction, { componentsAllAction } from "./action/componentsAction"

export interface IntAlbums  {
    album: any
    userId: number,
    id: number,
    title: string
}


export interface InitialStateAlbums {
    albums: IntAlbums[] | [],
}

const initialState:InitialStateAlbums = {
    albums: []
}

export type TodosActionType = ReturnType<PropertiesTypes<typeof componentsAllAction>>

const albumsReducers = (state = initialState,actino:TodosActionType) =>{
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