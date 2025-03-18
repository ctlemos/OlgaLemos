import {Link, NavLink, useLocation} from "react-router-dom";
import {useState} from 'react';
import './styles/Navbar.css';


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
                      <li style={{ color: isHome ? 'black' : 'white' }}><NavLink to="/sobre">Sobre</NavLink></li>
                      <li style={{ color: isHome ? 'black' : 'white' }}><NavLink to="/servicos">Serviços</NavLink></li>
                      <li style={{ color: isHome ? 'black' : 'white' }}><NavLink to="/contacto">Contacto</NavLink></li>
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