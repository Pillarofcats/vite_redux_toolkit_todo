import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'

//Types
type tTodo = {
  id: number
  text: string
  isCompleted: boolean
}

type tTodos = [] | tTodo[]

//Initial State
const initStateTodos = [{
  id: 0,
  text: "A",
  isCompleted: false
},
{
  id: 1,
  text: "B",
  isCompleted: true
}] as tTodos

// localStorage.setItem("todos", JSON.stringify(initStateTodos))
// localStorage.removeItem("todos")
const initTodos = localStorage.getItem("todos")
const setTodos:tTodos = initTodos ? JSON.parse(initTodos) : []

export const todoSlice = createSlice({
  name: "todos",
  initialState: setTodos,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      //Create todo
      const todo: tTodo = {
          id: Date.now(),
          text: action.payload,
          isCompleted: false
      }
      //Construct a new result array immutably and return it
      return [...state, todo]
    },
    removeTodo: (state, action: PayloadAction<number>) => {
      //Construct a new result array immutably and return it
      return [...state].filter((todo) => todo.id !== action.payload)
    },
    completedTodo: (state, action: PayloadAction<tTodo>) => {
      const index = state.findIndex((todo) => todo.id === action.payload.id)
      //Immer Fn - "Mutate" the existing state, no return value needed
      state[index].isCompleted = action.payload.isCompleted
    },
    editTodo: (state, action: PayloadAction<tTodo>) => {
      const index = state.findIndex((todo) => todo.id === action.payload.id)
      //Immer Fn - "Mutate" the existing state, no return value needed
      state[index].text = action.payload.text
    }
  }
})

//Typescript, Other code such as selectors can use the imported `RootState` type
export const selectTodos = (state: RootState) => state.todos
//Actions
export const { addTodo, removeTodo, completedTodo, editTodo } = todoSlice.actions
//Reducers
export default todoSlice.reducer