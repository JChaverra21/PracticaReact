/* eslint-disable react/prop-types */
import style from "./TodoItem.module.css"
import {BsFillTrashFill,BsFillPencilFill} from "react-icons/bs"

const TodoItem = ({todo, deleteTodo, setEdit}) => {
  return (
    <li className={style.list}>
      <div className={`${style.listItem} ${todo.completed ? style.completed : ""}`}>
        {todo.name}
        <p className={todo.tipo === 'ingreso' ? style.ingreso : style.gasto}>{todo.cantidad}</p>
      </div>
      <div className={style.contentbutton}>
        <button onClick={() => deleteTodo(todo)}><BsFillTrashFill color="#12343b" size={20}></BsFillTrashFill></button>
        <button onClick={() => setEdit(todo)}><BsFillPencilFill color="#12343b" size={20}></BsFillPencilFill></button>
      </div>
    </li>
  )
}

export default TodoItem