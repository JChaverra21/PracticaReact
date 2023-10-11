/* eslint-disable react/prop-types */
import TodoItem from "./TodoItem";
import style from "./TodoItem.module.css";

const TodoList = ({ todos, setTodos, setEdit, searchTerm, setSearchTerm, filterType, setFilterType }) => {

  const deleteTodo = ({ id }) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  }

  /*   const filteredTodos = todos.filter(todo =>
      todo.name.toLowerCase().includes(searchTerm.toLowerCase())
    ); */

  const filteredTodos = todos.filter(todo => {
    const nameMatch = todo.name.toLowerCase().includes(searchTerm.toLowerCase());
    const typeMatch = filterType === "all" || filterType === todo.tipo;
    return nameMatch && typeMatch
  });

  return (
    <div>

      <div className={style.search}>
        <input
          className={style.taskInput}
          type="text"
          placeholder="Buscar..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="filterType"
            id="all"
            checked={filterType === "all"}
            onChange={() => setFilterType("all")}
          />
          <label className="form-check-label" htmlFor="all">
            Todos
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="filterType"
            id="ingreso"
            checked={filterType === "ingreso"}
            onChange={() => setFilterType("ingreso")}
          />
          <label className="form-check-label" htmlFor="ingreso">
            Ingresos
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="filterType"
            id="gasto"
            checked={filterType === "gasto"}
            onChange={() => setFilterType("gasto")}
          />
          <label className="form-check-label" htmlFor="gasto">
            Gastos
          </label>
        </div>
      </div>
      {filteredTodos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          setEdit={setEdit}
        />
      ))
      }
    </div >
  )
}

export default TodoList