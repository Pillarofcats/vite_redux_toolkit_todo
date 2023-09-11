//Components
import AddTodo from './AddTodo'
import TodosList from './TodosList'
import CompletedTodosList from './CompletedTodosList'

export default function TodosApp() {

  console.log('TodosApp')

  return (
    <div className='todos-container'>
      <h1>ToDos App</h1>
      <AddTodo />
      <TodosList />
      <CompletedTodosList />
    </div>
  )

}