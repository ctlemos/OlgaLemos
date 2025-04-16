import {Link, NavLink, useLocation} from "react-router-dom";
import {useState} from 'react';
import './styles/navbar.css';


const Navbar = () => {

  const location = useLocation();
  const isHome = location.pathname === '/'; 

  
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen((open) => !open);
  };

  
  return (
    <header>
        <div className="navbar">
            <div className="navbar__wrapper">
  
              <Link to="/" style={{ color: isHome ? 'white' : 'black' }}><div className="logo">Olga Lemos</div></Link>
  
              <nav className={"navbar__menu" + (isOpen ? ' active' : '')}>
                  <ul  onClick={toggleMenu}>
                      <li><NavLink to="/sobre" style={{ color: isHome ? 'white' : 'black' }}>Sobre</NavLink></li>
                      <li><NavLink to="/servicos" style={{ color: isHome ? 'white' : 'black' }}>Serviços</NavLink></li>
                      <li><NavLink to="/contacto" style={{ color: isHome ? 'white' : 'black' }}>Contacto</NavLink></li>
                  </ul>
              </nav>
  
              <div className={"navbar__hamburger" + (isOpen ? ' active' : '')}
                onClick={toggleMenu}>
                  <span className="bar"></span>
                  <span className="bar"></span>
                  <span className="bar"></span>
              </div>
          </div>
      </div>
  </header>
  )
}

export default Navbar;