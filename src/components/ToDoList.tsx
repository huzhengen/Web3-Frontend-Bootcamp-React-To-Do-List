import { List, } from 'antd';
import { ToDoItem } from './ToDoItem';
import { MyObj } from '../App';
import { Fragment } from 'react/jsx-runtime';

type IProps = {
  data: MyObj[]
  deleteTodo: (uuid: string) => void
  changeData: (checked: boolean, uuid: string) => void
}

export const ToDoList = (props: IProps) => {
  const { data, deleteTodo, changeData } = props
  const todoData = data.filter(item => item.checked === false)
  const doneData = data.filter(item => item.checked === true)

  return (
    <Fragment>
      {todoData.length > 0 &&
        <List
          style={{ marginBottom: '1em' }}
          header="TO DO"
          bordered
          dataSource={todoData}
          renderItem={(item) => (
            <ToDoItem item={item} deleteTodo={deleteTodo}
              changeData={changeData} />
          )}
        />}
      {doneData.length > 0 &&
        <List
          header="DONE"
          bordered
          dataSource={doneData}
          renderItem={(item) => (
            <ToDoItem item={item} deleteTodo={deleteTodo}
              changeData={changeData} />
          )}
        />}
    </Fragment>
  )
}