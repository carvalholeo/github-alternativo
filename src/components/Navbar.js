import 'bootstrap/js/dist/collapse';
import 'bootstrap/js/dist/dropdown';
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-3">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <i className="bi bi-github d-inline-block" style={{ fontSize: "1.5rem" }}></i>
          <span className="ms-3 d-inline-block">GitHub Alt.</span>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/profile">Perfil</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/search">Pesquisa</NavLink>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Informações pessoais
              </Link>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><NavLink className="dropdown-item" to="/notifications">Notificações</NavLink></li>
                <li><NavLink className="dropdown-item" to="#">Another action</NavLink></li>
                <li><hr className="dropdown-divider" /></li>
                <li><NavLink className="dropdown-item" to="#">Something else here</NavLink></li>
              </ul>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link disabled" to="/contact" tabIndex="-1" aria-disabled="true">Contato</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
