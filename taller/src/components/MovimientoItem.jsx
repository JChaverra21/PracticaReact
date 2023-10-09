/* eslint-disable react/prop-types */
import { ListItem } from '@mui/material';
import '../App.css';
import {BsFillTrashFill,BsFillPencilFill} from "react-icons/bs"

const MovimientoItem = ({ movimiento, deleteMovimiento }) => {
    return (
        <ListItem className='list'>
            <div className='listItem'>
                {movimiento.name}
                {movimiento.cantidad}
            </div>
            <div>
                <button onClick={() => deleteMovimiento(movimiento)}><BsFillTrashFill color="#12343b" size={20}></BsFillTrashFill></button>
            </div>
        </ListItem>
    )
}

export default MovimientoItem