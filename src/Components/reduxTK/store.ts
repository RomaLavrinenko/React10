import { configureStore } from '@reduxjs/toolkit'
import todosReducer from "./slice/TodosSlice"
import commentsReducer from "./slice/CommentsSlice"
import albumsReducer from "./slice/AlbumsSlice"

export const store = configureStore({
  reducer: {
    todos: todosReducer,
    comments: commentsReducer,
    albums: albumsReducer,
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch