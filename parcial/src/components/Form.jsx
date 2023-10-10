/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import style from "./Form.module.css"
import uuid4 from "uuid4";
import { Button } from "@mui/material";
import Swal from 'sweetalert2';

const Form = ({ saldoInicial, setSaldoInicial, saldoFinal, setSaldoFinal, todos, setTodos, edit, setEdit }) => {

  const [values, setValues] = useState({
    tipo: "gasto",
    name: "",
    cantidad: 0,
  })

  const handlerSubmit = (e) => {
    e.preventDefault();

    if (edit) {
      editTodo(edit);
    } else {
      console.log(typeof saldoFinal);
      console.log(typeof saldoInicial);
      console.log(values);
      if (values.tipo === "gasto") {
        if ((saldoFinal - Number(values.cantidad)) >= 0) {
          setSaldoFinal(saldoFinal - Number(values.cantidad));
        }
        else {
          console.log("saldo insuficiente");
          return       Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Saldo insuficiente',
            showConfirmButton: false,
            timer: 1500
          })
        }
      }
      else {
        setSaldoFinal(saldoFinal + Number(values.cantidad));
      }
      console.log("llegamos a covenas");
      const newTodo = {
        id: uuid4(),
        ...values
      };
      setTodos([...todos, newTodo]);

      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Movimiento agregado',
        showConfirmButton: false,
        timer: 1500
      })

      setValues({
        tipo: "gasto",
        name: "",
        cantidad: 0,
      });
    }
  };

  const editTodo = (todo) => {
    const newTodos = todos.map((item) => item.id === todo.id ? { ...todo, name: values.name, cantidad: values.cantidad } : item);
    setTodos(newTodos);
    setEdit(null);
  }

  useEffect(() => {
    if (edit) setValues(edit);
    else setValues({
      tipo: "gasto",
      name: "",
      cantidad: 0,
    });
  }, [edit])

  return (
    <div className={style.formContainer}>
      <form onSubmit={handlerSubmit}>

        {/*         <div className={style.formGroup}>
          <input
            name="inicial"
            className={style.taskInput}
            placeholder="Saldo Inicial"
            value={saldoInicial}
            onChange={(e) => setSaldoInicial(e.target.value)}
          />
        </div> */}
        <div className={style.formGroup}>
          <select name="tipo" className={style.selectInput} value={values.tipo} onChange={(e) => setValues({ ...values, tipo: e.target.value })}>
            <option value="gasto">Gasto</option>
            <option value="ingreso">Ingreso</option>
          </select>
        </div>
        <div className={style.formGroup}>
          <input
            name="name"
            className={style.taskInput}
            placeholder="Nombre"
            required
            value={values.name}
            onChange={(e) => setValues({ ...values, name: e.target.value })}
          />
        </div>
        <div className={style.formGroup}>
          <input
            type="number"
            name="cantidad"
            className={style.taskInput}
            placeholder="Cantidad"
            required
            value={values.cantidad}
            onChange={(e) => setValues({ ...values, cantidad: e.target.value })}
          />
        </div>
        {/*         <button type="submit" className={style.button}>
          ➕
        </button> */}
        <Button type="submit" variant="contained" className={style.button}>
          {edit ? "edit" : "Agregar movimiento"}
        </Button>
      </form>
    </div>
  )
}

export default Form