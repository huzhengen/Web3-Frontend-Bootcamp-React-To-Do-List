import { List, Checkbox } from 'antd';
import { DeleteOutlined, } from '@ant-design/icons';
import type { CheckboxProps } from 'antd';
import { MyObj } from '../App';

type IProps = {
  item: MyObj
  deleteTodo: (uuid: string) => void
  changeData: (checked: boolean, uuid: string) => void
}

export const ToDoItem = (props: IProps) => {
  const { item, deleteTodo, changeData, } = props

  const deleteItem = (uuid: string) => {
    deleteTodo(uuid)
  }

  const onChange: CheckboxProps['onChange'] = (e) => {
    changeData(e.target.checked, item.uuid)
  };

  return (
    <List.Item>
      <div className="to-do-item-content">
        <span title={item.value} className="to-do-item-text"
          style={item.checked ? { textDecoration: 'line-through' } : {}}>
          <Checkbox onChange={onChange} checked={item.checked}
            style={{ marginRight: 10 }} />
          {item.value}
        </span>
        <DeleteOutlined style={{ color: '#ff4d4f' }}
          onClick={() => deleteItem(item.uuid)} />
      </div>
    </List.Item>
  )
}