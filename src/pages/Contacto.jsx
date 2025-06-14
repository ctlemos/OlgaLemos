import React from 'react';
import './styles/contacto.css';
import contactoData from '../assets/js/contactoData';
import { IoLogoWhatsapp } from "react-icons/io";
import { FaFacebookMessenger } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import PageWrapper from '../components/PageWrapper';

const Contacto = () => {
    return (
      <PageWrapper>
        <div className='main'>     
          <div className='main__title'>
            <h1>{contactoData.title}</h1>
          </div>
    
          <section className='main__wrapper-info'>
            <div className='main__info-text-contact'>
              
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

              <div className="map_container">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3031.15559320606!2d-8.47456912450954!3d40.56024114689318!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd2309f092e6454b%3A0xec316df6f68c1adc!2sR.%20Namorados%20242%2C%203750-722%20Recard%C3%A3es!5e0!3m2!1spt-PT!2spt!4v1749912991115!5m2!1spt-PT!2spt" width="100%" 
                  height="300" 
                  style={{ border: 0 }}
                  allowfullscreen="" 
                  loading="lazy" 
                  referrerpolicy="no-referrer-when-downgrade"
                  sandbox="allow-scripts allow-same-origin">
                </iframe>
              </div>
              
            </div>
    
            <div className='main__wrapper-img'>
              <img className='contact__img' src={contactoData.img} alt="pessoas a comerem juntas" />
            </div>
          </section>
        </div>
      </PageWrapper>
    )
}

export default Contacto