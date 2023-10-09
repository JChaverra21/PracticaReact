/* eslint-disable no-unused-vars */
import Header from "./components/Header"
import Form from "./components/Form"
import './App.css';
import { TextField } from "@mui/material";
import { useState } from "react";
import MovimientoList from "./components/MovimientoList";

const App = () => {

  const [saldoInicial, setSaldoInicial] = useState()
  const [saldoFinal, setSaldoFinal] = useState()

  const [movimientos, setMovimientos] = useState([])
  const [edit, setEdit] = useState(null)

  return (
    <div>
      <header className="header">
        <div>
          <Header />
        </div>
        <div className="inputs">
          <div className="label">
            <label htmlFor="inicial">Saldo Inicial:</label>
            <TextField
              id="inicial"
              label="Saldo Inicial"
              color="error"
              focused
              required
              InputProps={{
                style: {
                  color: 'black', // Cambia el color del texto aquí
                },
              }}
            />
          </div>
          <div className="label">
            <label htmlFor="final">Saldo Final:</label>
            <TextField
              id="final"
              label="Saldo Final"
              color="error"
              focused
              InputProps={{
                style: {
                  color: 'black', // Cambia el color del texto aquí
                },
              }}
            />
          </div>
        </div>
      </header>
      <div className="container">
        <div className="appwrapper">
          <div className='formContainer'>
            <Form
              movimientos={movimientos}
              setMovimientos={setMovimientos}
            />
          </div>
          <div className='formContainer'>
            <MovimientoList
              movimientos={movimientos}
              setMovimientos={setMovimientos}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App