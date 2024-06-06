import './App.css'
import { Header } from './components/Header'
import { AddToDo } from './components/AddToDo'
import { ToDoList } from './components/ToDoList'
import { useEffect, useState } from 'react'

export type MyObj = {
  value: string,
  checked: boolean,
  uuid: string,
}

function App() {
  const [data, setData] = useState<MyObj[]>([])

  const addTodo = (value: string) => {
    data.unshift({ value, checked: false, uuid: crypto.randomUUID(), })
    saveData(data)
  }

  const deleteTodo = (uuid: string) => {
    const index = data.findIndex(item => item.uuid === uuid)
    data.splice(index, 1)
    saveData(data)
  }

  const saveData = (data: MyObj[]) => {
    setData([...data])
    localStorage.setItem('react-to-do-list', JSON.stringify(data))
  }

  const changeData = (checked: boolean, uuid: string) => {
    const index = data.findIndex(item => item.uuid === uuid)
    data[index].checked = checked
    saveData(data)
  }

  useEffect(() => {
    setData(JSON.parse(localStorage.getItem('react-to-do-list') || ''))
  }, [])

  return (
    <div className="react-to-do-list">
      <Header title="React-To-Do-List" />
      <AddToDo addTodo={addTodo} />
      <ToDoList data={data} changeData={changeData} deleteTodo={deleteTodo} />
    </div>
  )
}

export default App
