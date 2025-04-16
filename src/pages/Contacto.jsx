import React from 'react';
import './styles/Contacto.css';
import contactoData from '../assets/js/contactoData';
import { IoLogoWhatsapp } from "react-icons/io";
import { FaFacebookMessenger } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";

const Contacto = () => {
    return (
        <div className='main'>     
          <div className='main__title'>
            <h1>{contactoData.title}</h1>
          </div>
    
          <section className='main__wrapper-info'>
            <div className='main__info-text'>
              <p>{contactoData.address}</p>
              
              <div className='contact__main_info-text-contacts'>
                {/* Phone */}
                <a className='phone' href={contactoData.phone}> 
                  <FaPhone /> {contactoData.contact} <small>(Custo chamada para rede fixa nacional)</small>
                </a>

                {/* Whatsapp */}
                <a className='whatsapp' href={`https://wa.me/${contactoData.phone.replace("tel:", "")}?text=Olá,%20gostaria%20de%20mais%20informações!`} target="_blank" rel="noopener noreferrer">
                  <IoLogoWhatsapp /> WhatsApp 
                </a>

                {/* Messenger */}
                <a className='messenger' href={contactoData.facebook} target="_blank" rel="noopener noreferrer">
                  <FaFacebookMessenger /> Facebook Messenger 
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