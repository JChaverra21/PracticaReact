/* eslint-disable react/prop-types */
import { ListItem } from '@mui/material';
import '../App.css';
import {AiFillDelete,AiFillEdit} from "react-icons/ai"

const MovimientoItem = ({ movimiento, deleteMovimiento, setEdit }) => {
    return (
        <ListItem className='list'>
            <div className='listItem'>
                {movimiento.name}
                {movimiento.cantidad}
            </div>
            <div>
                <button onClick={() => deleteMovimiento(movimiento)}><AiFillDelete color="#12343b" size={20}></AiFillDelete></button>
                <button onClick={() => setEdit(movimiento)}><AiFillEdit color="#12343b" size={20}></AiFillEdit></button>
            </div>
        </ListItem>
    )
}

export default MovimientoItem