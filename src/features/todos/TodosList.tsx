import { useAppSelector, useAppDispatch } from '../../app/hooks'

import { useMemo } from 'react'

//Components
import ATodo from './ATodo'

export default function TodosList() {
  
  const todos = useAppSelector(state => state.todos)

  const todosList = useMemo(() => todos.filter((todo) => todo.isCompleted === false), [todos])

  console.log('TodosList')

  return (
    <>
    <h2>ToDos</h2>
      {
        todosList.length > 0 ? todosList.map((todo, index) => {
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