import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";


const App = () => {
    return (
        <>
            <header id="header">
                <NavBar/>
            </header>
            <ItemListContainer
                greeting = "Rodrigo"
            />
        </>
    )
}

export default App;