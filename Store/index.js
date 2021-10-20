import { configureStore } from "@reduxjs/toolkit"
import Todo from "./TodoSlice"

const store = configureStore({
  reducer: { todo: Todo.reducer },
})

export default store
