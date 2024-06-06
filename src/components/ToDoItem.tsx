import { List, } from 'antd';
import {
  DeleteOutlined,
} from '@ant-design/icons';

type IProps = {
  item: string
  index: number
  deleteTodo: (index: number) => void
}

export const ToDoItem = (props: IProps) => {
  const { item, deleteTodo, index, } = props
  const deleteItem = (n: number) => {
    deleteTodo(n)
  }

  return (
    <List.Item>
      <div className="to-do-item-content">
        <span title={item} className="to-do-item-text">{item}</span>
        <DeleteOutlined style={{ color: '#ff4d4f' }} onClick={() => deleteItem(index)} />
      </div>
    </List.Item>
  )
}