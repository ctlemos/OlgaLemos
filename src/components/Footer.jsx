import './styles/footer.css';
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='footer__container'>
        <footer>
            <hr />
            <p className="footer__info">
                © Copyright 2024 Olga Lemos - Parabéns 
                <a className='facebook' href="https://www.facebook.com/docariaparabens" target="_blank" rel="noopener noreferrer">
                  <FaFacebook />
                </a> 
                | <small>Todos os direitos reservados</small> 
            </p>
        </footer>
    </div>
  )
}

export default Footer;