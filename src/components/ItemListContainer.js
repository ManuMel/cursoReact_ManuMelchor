import ItemCount from "./ItemCount";

const ItemListContainer = (props) => {
    return (
        <div>
            <p className="fs-1 m-3">¡Bienvenido {props.greeting}!</p>
            <ItemCount/>    
        </div>
        
    )
}
export default ItemListContainer;