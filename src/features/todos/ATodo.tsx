import { useAppDispatch } from "../../app/hooks"
import { completedTodo, removeTodo, editTodo } from "./todoSlice"
import { useRef, useState, useEffect } from 'react'
import tTodo from "../../types/Todo"

export default function ATodo ({id, text, isCompleted}:tTodo ) {

  const dispatch = useAppDispatch()
  const inputRef = useRef<HTMLInputElement>(null)
  const [isEdit, setIsEdit] = useState<boolean>(false)

  function deleteTodo() {
    dispatch(removeTodo(id))
  }

  function toggleCompleteTodo() {
    dispatch(completedTodo({id, text, isCompleted: !isCompleted}))
  }

  function submitEdit() {
    //Guards
    if(inputRef.current === null || inputRef.current.value === "") {
      toggleEdit()
      return
    }
    dispatch(editTodo({id, text: inputRef.current.value, isCompleted}))
    toggleEdit()
  }

  function toggleEdit() {
    setIsEdit(prevState => !prevState)
  }

  useEffect(() => {
    if(inputRef.current) inputRef.current.focus()
  }, [isEdit])

  console.log('ATodo')

  return (
    <div className={`todo ${isCompleted ? "complete" : "incomplete"}`}>
      <input checked={isCompleted} onChange={toggleCompleteTodo} type="checkbox"/>
      {
        isEdit ? 
          <>
            <input ref={inputRef} placeholder={text} type="text" /> 
            <button className="edit" onClick={ submitEdit }>Submit Edit</button>
          </>
          :
          <>
            <p>{text}</p>
            <button className="edit" onClick={ toggleEdit }>Edit</button>
          </>
      }
      <button className="delete" onClick={ deleteTodo }>Delete</button>
    </div>
  )
}