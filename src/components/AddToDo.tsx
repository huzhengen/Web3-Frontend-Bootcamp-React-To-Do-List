import { Button, Input, Space } from 'antd';
import { useState } from 'react';

type IProps = {
  addTodo: (value: string) => void
}

export const AddToDo = (props: IProps) => {
  const { addTodo } = props
  const [inputValue, setInputValue] = useState('')

  const add = () => {
    if (inputValue) {
      addTodo(inputValue)
      setInputValue('')
    }
  }

  return (
    <div className="add-to-do">
      <Space.Compact style={{ width: '100%' }}>
        <Input value={inputValue} placeholder="Please input your todo"
          onChange={e => setInputValue(e.target.value)}
          onPressEnter={add} />
        <Button type="primary" onClick={add}>Add Todo</Button>
      </Space.Compact>
    </div>
  )
}