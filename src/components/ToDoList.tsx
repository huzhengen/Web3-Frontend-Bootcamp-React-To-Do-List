import { List, } from 'antd';
import { ToDoItem } from './ToDoItem';

type IProps = {
  data: string[]
  deleteTodo: (index: number) => void
}

export const ToDoList = (props: IProps) => {
  const { data, deleteTodo } = props
  return (
    <List
      bordered
      dataSource={data}
      renderItem={(item, index) => (
        <ToDoItem item={item} index={index} deleteTodo={deleteTodo} />
      )}
    />
  )
}