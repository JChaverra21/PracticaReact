/* eslint-disable no-unused-vars */
import style from "./App.module.css"
import Form from "./components/Form"
import Header from "./components/Header"
import { useState } from "react"
import TodoList from "./components/TodoList"
import { useEffect } from "react"

const App = () => {

  const [todos, setTodos] = useState([]);
  const [saldoInicial, setSaldoInicial] = useState(0);
  const [saldoFinal, setSaldoFinal] = useState(saldoInicial);
  const [edit, setEdit] = useState(null);

  /*   const calcularSaldoFinal = todos.reduce((total, movimiento) => {
      if (movimiento.tipo === "ingreso") {
        return total + Number(movimiento.cantidad);
      }
      else {
        if ((total - Number(movimiento.cantidad)) >= 0) {
          setValidate(true)
          return total - Number(movimiento.cantidad);
        }
        setValidate(false);
        alert("Saldo insuficiente");
      }
    }, saldoFinal);
  
    console.log(validate);
  
    useEffect(() => {
      setSaldoFinal(calcularSaldoFinal);
    }, [saldoInicial, todos, edit]); */

  return (
    <div>
      <header className={style.header}>
        <div>
          <h1>Title</h1>
        </div>
        <div className={style.containerinputs}>
          <div className={style.label}>
            <label htmlFor="inicial">Saldo Inicial:</label>
            <input
              type="text"
              id="inicial"
              name="inicial"
              className={style.taskInput}
              placeholder="Saldo Inicial"
              value={saldoInicial}
              onChange={(e) => {

                setSaldoInicial(Number(e.target.value))
                setSaldoFinal(Number(e.target.value))
              }}
            />
          </div>
          <div className={style.label}>
            <label htmlFor="final">Saldo Final:</label>
            <input
              type="text"
              id="final"
              name="final"
              readOnly
              className={style.taskInput}
              placeholder="Saldo Final"
              value={saldoFinal}
              onChange={(e) => setSaldoFinal(Number(e.target.value))}
            />
          </div>
        </div>
      </header>
      <div className={style.container}>
        <div className={style.appwrapper}>
          <div>
            <Header />
          </div>
          <div>
            <Form
              saldoInicial={saldoInicial}
              setsaldoInicial={setSaldoInicial}
              saldoFinal={saldoFinal}
              setSaldoFinal={setSaldoFinal}
              todos={todos}
              setTodos={setTodos}
              edit={edit}
              setEdit={setEdit}
            />
          </div>
        </div>
        <div>
          <div className={style.appwrapper}>
            <TodoList
              todos={todos}
              setTodos={setTodos}
              setEdit={setEdit}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
