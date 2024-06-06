import { List, Checkbox } from 'antd';
import { DeleteOutlined, } from '@ant-design/icons';
import type { CheckboxProps } from 'antd';
import { MyObj } from '../App';

type IProps = {
  item: MyObj
  index: number
  deleteTodo: (index: number) => void
  changeData: (checked: boolean, index: number) => void
}

export const ToDoItem = (props: IProps) => {
  const { item, deleteTodo, index, changeData, } = props

  const deleteItem = (n: number) => {
    deleteTodo(n)
  }

  const onChange: CheckboxProps['onChange'] = (e) => {
    console.log(`checked = ${e.target.checked}`);
    changeData(e.target.checked, index)
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
        <DeleteOutlined style={{ color: '#ff4d4f' }} onClick={() => deleteItem(index)} />
      </div>
    </List.Item>
  )
}