import {Link, NavLink} from "react-router-dom";
import './styles/navbar.css';

const Navbar = () => {
  return (
    <header>
      <div className="navbar">
        <div className="navbar__wrapper">
          <Link to="/">
            <div className="logo">Olga Lemos</div>
          </Link>

          <nav className="navbar__menu">
            <ul>
              <li><NavLink to="#">Sobre</NavLink></li>
              <li><NavLink to="#">Serviços</NavLink></li>
              <li><NavLink to="#">Contacto</NavLink></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Navbar;