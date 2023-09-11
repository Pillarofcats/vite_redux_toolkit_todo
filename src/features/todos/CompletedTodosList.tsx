import { useAppSelector } from '../../app/hooks'
import { useMemo } from 'react'
//Components
import ATodo from './ATodo'

export default function CompletedTodosList() {
  //Todos state
  const todos = useAppSelector(state => state.todos)

  const todosCompletedList = useMemo(() => todos.filter((todo) => todo.isCompleted === true), [todos])

  console.log('CompletedTodoList')

  return (
    <>
    <h2>Completed ToDos</h2>
      {
        todosCompletedList.length > 0 ? todosCompletedList.map((todo, index) => {
          return (
              <ATodo 
                key={ index }
                id={ todo.id }
                text={ todo.text }
                isCompleted={ todo.isCompleted }
              />
          )
        })
        : null
      }
    </>
  )
}