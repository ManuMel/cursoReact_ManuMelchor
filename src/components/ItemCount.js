import { useState } from "react"


const ItemCount = () => {

    const [initial, onAdd] = useState(0)

    const stock = 5

    const addItem = () => {
        onAdd(initial < stock  ?  initial + 1  :  initial)   
    }
    
    const subtractItem = () => {
        onAdd(initial  ?  initial - 1  :  initial)  
    }

    const emptyCart = () => {
        onAdd(0)
    }

    const alertStock = (
        initial == stock ? "¡solo contamos con 5 unidades disponibles!" : ""
    )

    return (
        <div className="m-5 border rounded styleCart">
            <p className="fs-3 m-3">{initial} artículos en el carrito</p>
            <button className="btn btn-danger m-3" onClick={subtractItem}>quitar</button>
            <button className="btn btn-success" onClick={addItem}>agregar</button>
            <button className="btn btn-secondary m-3" onClick={emptyCart}>vaciar</button>
            <p className="fs-3 text-danger m-3">{alertStock}</p>
        </div>
    )
}

export default ItemCount;