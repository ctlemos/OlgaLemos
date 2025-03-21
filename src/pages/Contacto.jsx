import React from 'react';
import './styles/Contacto.css';
import contactoData from '../js/contactoData';
import { IoLogoWhatsapp } from "react-icons/io";

const Contacto = () => {
    return (
        <div className='main'>     
          <div className='main__title'>
            <h1>{contactoData.title}</h1>
          </div>
    
          <section className='main__wrapper-info'>
            <div className='main__info-text'>
              <p>{contactoData.address}</p>

              <div className='contact__main_info-text-whatsapp'>
                <a className='whatsapp' href="https://wa.me/351933251197?text=Olá,%20gostaria%20de%20mais%20informações!" target="_blank" rel="noopener noreferrer">
                  <IoLogoWhatsapp /> {contactoData.contact}
                </a>
              </div>
            </div>
    
            <div className='main__wrapper-img'>
              <img className='contact__img' src={contactoData.img} alt="pessoas a comerem juntas" />
            </div>
          </section>
        </div>
    )
}

export default Contacto