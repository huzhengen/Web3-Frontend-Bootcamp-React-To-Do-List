import { Button, Input, Space } from 'antd';
import { useState } from 'react';

export const AddToDo = () => {
  const [inputValue, setInputValue] = useState('')

  const addTodo = () => {
    console.log(inputValue)
    
  }

  return (
    <Space.Compact style={{ width: '100%' }}>
      <Input value={inputValue} placeholder="Please input your todo"
        onChange={e => setInputValue(e.target.value)}
        onPressEnter={addTodo} />
      <Button type="primary" onClick={addTodo}>Add Todo</Button>
    </Space.Compact>
  )
}