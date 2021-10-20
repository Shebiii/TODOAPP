import { createSlice } from "@reduxjs/toolkit"

const Todo = createSlice({
  name: "todo",
  initialState: {
    list: [],
  },
  reducers: {
    addToTodo(state, action) {
      const newItem = action.payload
      state.list.push({
        name: newItem.name,
        id: newItem.id,
        done: Boolean(newItem.done),
      })
    },
    deleteToTodo(state) {
      state.list = []
    },
    completed(state, action) {
      const id = action.payload
      const find = state.list.find((item) => item.id === id)
      find.done = !find.done
      state.list.map((item) => console.log(typeof item.done))
    },
    editToTodo(state, action) {
      const newData = action.payload
      state.list = state.list.filter((item) => item.id !== parseInt(newData.id))
      state.list.push({
        name: newData.name,
        id: newData.id,
      })
    },
  },
})
export const TodoAction = Todo.actions

export default Todo
