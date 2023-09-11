import Counter from "./features/counter/Counter"
import TodosApp from "./features/todos/TodosApp"

import "./App.css"

function App() {
  return (
    <div className="App-container">
        <TodosApp />
        <Counter />
    </div>
  )
}

export default App
