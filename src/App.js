import { useEffect, useState } from 'react'
import './App.css'
import { TodoContainer } from './Components/TodoContainer'
import { Bars } from 'react-loader-spinner'

export const App = () => {
  const [json, setjson] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    fetch('http://localhost:3006/todos')
      .then((response) => response.json())
      .then((json) => {
          setjson(json)
          setLoading(true)
      })
  }, [])

  return (
    <div>
      {loading ? (
        <TodoContainer jsonTodos={json} />
      ) : (
        <Bars
          height="180"
          width="180"
          color="#4fa94d"
          ariaLabel="bars-loading"
          visible={true}
        />
      )}
    </div>
  )
}
