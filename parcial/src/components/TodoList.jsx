/* eslint-disable react/prop-types */
import TodoItem from "./TodoItem";

const TodoList = ({todos, setTodos, setEdit}) => {

  const deleteTodo = ({id}) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  }


  return (
    <div>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          setEdit={setEdit}
        />
      ))}
    </div>
  )
}

export default TodoList