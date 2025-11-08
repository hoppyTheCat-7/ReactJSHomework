import './App.css'
import { TodoProvider } from './exercise_1/context/TodoContext'
import TodoList from './exercise_1/components/TodoList'

function App() {


  return (
    <>
      <TodoProvider>
        <TodoList />
      </TodoProvider>
    </>
  )
}

export default App
