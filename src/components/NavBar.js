import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg nav">
            <div className="container-fluid ">
                <a className="navbar-brand" href="#"><h3>React store</h3></a>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item ">
                            <a className="nav-link" href="#">productos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">sucursales</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">contacto</a>
                        </li>
                    </ul>
                </div>
                <CartWidget/>
            </div>
        </nav>
    )
}

export default NavBar;