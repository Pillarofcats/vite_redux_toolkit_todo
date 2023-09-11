import React, { useRef, useEffect } from 'react'
//Reducer - RTK
import { addTodo } from './todoSlice'
//Dispatch - RTK
import { useAppDispatch, useAppSelector } from '../../app/hooks'

export default function AddTodo() {

  const todos = useAppSelector(state => state.todos)

  const dispatch = useAppDispatch()
  const inputRef = useRef<HTMLInputElement>(null)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    //Guards
    if(inputRef.current === null || inputRef.current.value === "") return
    //Dispatch
    dispatch(addTodo(inputRef.current.value))
    //Reset
    inputRef.current.value = ""
    inputRef.current.focus()
  }

  useEffect(() => {
    //Save
    console.log('localstorage save')
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  console.log('AddTodo')

  return (
    <form className='add-todo-form' onSubmit={ handleSubmit }>
      <input autoFocus ref={inputRef} type="text" />
      <button type='submit'>Add ToDo</button>
    </form>
  )
}