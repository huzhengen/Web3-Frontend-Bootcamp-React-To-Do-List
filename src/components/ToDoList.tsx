import { List, } from 'antd';
import { ToDoItem } from './ToDoItem';
import { MyObj } from '../App';

type IProps = {
  data: MyObj[]
  deleteTodo: (index: number) => void
  changeData: (checked: boolean, index: number) => void
}

export const ToDoList = (props: IProps) => {
  const { data, deleteTodo, changeData } = props
  return (
    <List
      bordered
      dataSource={data}
      renderItem={(item, index) => (
        <ToDoItem item={item} index={index} deleteTodo={deleteTodo}
          changeData={changeData} />
      )}
    />
  )
}