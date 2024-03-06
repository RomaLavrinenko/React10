import {  createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GetAlbom} from "../../service/ApiService";

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

export const getAlbomThankRTK = createAsyncThunk(
    '/api/albom',
    (data,{rejectWithValue})=>{
        return GetAlbom.handleAlbom()
        .then(resp => resp.data)
        .catch(e => rejectWithValue(e))
    }
)

export const AlbomSlice = createSlice({
    name: 'Albom',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
          .addCase(getAlbomThankRTK.fulfilled, (state, action) => {
            state.albums = action.payload;
          })
          .addCase(getAlbomThankRTK.rejected, (state, action) => {
            console.log("ERROR", action);
          });
      },
      
    })



export default AlbomSlice.reducer