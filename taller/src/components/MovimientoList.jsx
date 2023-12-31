/* eslint-disable react/prop-types */
import '../App.css';
import MovimientoItem from './MovimientoItem';

const MovimientoList = ({ movimientos, setMovimientos, setEdit }) => {

    const deleteMovimiento = ({id}) => {
        const newMovimiento = movimientos.filter((item) => item.id !== id);
        setMovimientos(newMovimiento);
    }

    return (
        <div>
            {
                movimientos.map((movimiento) => (
                    <MovimientoItem
                        key={movimiento.id}
                        movimiento={movimiento}
                        deleteMovimiento={deleteMovimiento}
                        setEdit={setEdit}
                    />
                ))
            }
        </div>
    )
}

export default MovimientoList