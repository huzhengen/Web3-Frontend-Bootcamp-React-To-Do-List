import './App.css'
import { Header } from './components/Header'
import { AddToDo } from './components/AddToDo'
import { ToDoList } from './components/ToDoList'
import { useEffect, useState } from 'react'

function App() {
  const [data, setData] = useState<string[]>([])

  const addTodo = (value: string) => {
    data.unshift(value)
    setData([...data])
    localStorage.setItem('react-to-do-list', JSON.stringify(data))
  }

  const deleteTodo = (index: number) => {
    data.splice(index, 1)
    setData([...data])
    localStorage.setItem('react-to-do-list', JSON.stringify(data))
  }

  useEffect(() => {
    setData(JSON.parse(localStorage.getItem('react-to-do-list') || ''))
  }, [])

  return (
    <div className="react-to-do-list">
      <Header />
      <AddToDo addTodo={addTodo} />
      <ToDoList data={data} deleteTodo={deleteTodo} />
    </div>
  )
}

export default App
