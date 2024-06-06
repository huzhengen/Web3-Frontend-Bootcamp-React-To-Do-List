import './App.css'
import { Header } from './components/Header'
import { AddToDo } from './components/AddToDo'
import { ToDoList } from './components/ToDoList'
import { useEffect, useState } from 'react'

export type MyObj = {
  value: string,
  checked: boolean
}

function App() {
  const [data, setData] = useState<MyObj[]>([])

  const addTodo = (value: string) => {
    data.unshift({ value, checked: false })
    saveData(data)
  }

  const deleteTodo = (index: number) => {
    data.splice(index, 1)
    saveData(data)
  }

  const saveData = (data: MyObj[]) => {
    setData([...data])
    localStorage.setItem('react-to-do-list', JSON.stringify(data))
  }

  const changeData = (checked: boolean, index: number) => {
    data[index].checked = checked
    saveData(data)
  }

  useEffect(() => {
    setData(JSON.parse(localStorage.getItem('react-to-do-list') || ''))
  }, [])

  return (
    <div className="react-to-do-list">
      <Header />
      <AddToDo addTodo={addTodo} />
      <ToDoList data={data} changeData={changeData} deleteTodo={deleteTodo} />
    </div>
  )
}

export default App
