/* eslint-disable react/prop-types */
import { useState } from 'react';
import '../App.css';
import { Button, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import uuid4 from 'uuid4';

const Form = ({ movimientos, setMovimientos }) => {

  const [values, setValues] = useState({
    tipo: "gasto",
    name: "",
    cantidad: 0
  })

  const handlerSubmit = (e) => {
    e.preventDefault();

    const newMovimiento = {
      id: uuid4(),
      ...values
    }
    setMovimientos([...movimientos, newMovimiento]);
    setValues({
      tipo: "gasto",
      name: "",
      cantidad: 0
    });
  }

  return (
    <div>
      <form onSubmit={handlerSubmit}>
        <div className='formGroup'>
          <InputLabel id="tipo-label">Tipo Movimiento:</InputLabel>
          <Select
            labelId="tipo-label"
            id="tipo"
            color='warning'
            required
            value={values.tipo}
            onChange={(e) => setValues({ ...values, tipo: e.target.value })}
          >
            <MenuItem value="gasto">Gasto</MenuItem>
            <MenuItem value="ingreso">Ingreso</MenuItem>
          </Select>
        </div>
        <div className='formGroup'>
          {/* <label htmlFor="name">Nombre:</label> */}
          <TextField
            id="name"
            label="Nombre"
            color="warning"
            focused
            required
            InputProps={{
              style: {
                color: 'white', // Cambia el color del texto aquí
              },
            }}
            value={values.name}
            onChange={(e) => setValues({...values, name: e.target.value})}
          />
        </div>
        <div className='formGroup'>
          {/* <label htmlFor="name">Cantidad:</label> */}
          <TextField
            id="cantidad"
            label="Cantidad"
            color="warning"
            focused
            required
            InputProps={{
              style: {
                color: 'white', // Cambia el color del texto aquí
              },
            }}
            value={values.cantidad}
            onChange={(e) => setValues({...values, cantidad: e.target.value})}
          />
        </div>
        <Button type='submit' variant="contained">
          Agregar Movimiento
        </Button>
      </form>
    </div>
  )
}

export default Form