import { useEffect, useState } from 'react'
import './App.css'
import { TodoContainer } from './Components/TodoContainer'
import { Loader } from './Components/loader/loader.js'

export const App = () => {
  const [todosServer, setTodosServer] = useState([])
  const [isLoadingJsonServerComponent, setIsLoadingJsonServerComponent] =
    useState(false)

  useEffect(() => {
    fetch('http://localhost:8204/todos')
      .then((loadedData) => loadedData.json())
      .then((loadedTodo) => {
        setTodosServer(loadedTodo)
        setIsLoadingJsonServerComponent(true)
      })
  }, [])

  return (
    <div>
      {isLoadingJsonServerComponent ? (
        <TodoContainer jsonTodos={todosServer} />
      ) : (
        <Loader />
      )}
    </div>
  )
}
