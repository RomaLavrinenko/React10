import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GetTodo } from "../../service/ApiService";

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

export const getTodosThankRTK = createAsyncThunk(
    '/api/todos',
    (data,{rejectWithValue})=>{
        return GetTodo.handleTodo()
        .then(resp => resp.data)
        .catch(e => rejectWithValue(e))
    }
)

export const TodosSlice = createSlice({
    name: 'Todos',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
          .addCase(getTodosThankRTK.fulfilled, (state, action) => {
            state.todos = action.payload;
          })
          .addCase(getTodosThankRTK.rejected, (state, action) => {
            console.log("ERROR", action);
          });
      },
      
    })


// export const { getTodos } = TodosSlice.actions

export default TodosSlice.reducer