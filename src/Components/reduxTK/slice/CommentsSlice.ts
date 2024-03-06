import {  createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GetComment } from "../../service/ApiService";

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

export const getCommentsThankRTK = createAsyncThunk(
    '/api/comments',
    (data,{rejectWithValue})=>{
        return GetComment.handleComment()
        .then(resp => resp.data)
        .catch(e => rejectWithValue(e))
    }
)

export const CommentSlice = createSlice({
    name: 'Comment',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
          .addCase(getCommentsThankRTK.fulfilled, (state, action) => {
            state.comments = action.payload;
          })
          .addCase(getCommentsThankRTK.rejected, (state, action) => {
            console.log("ERROR", action);
          });
      },
      
    })



export default CommentSlice.reducer