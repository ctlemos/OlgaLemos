import React from 'react';
import './styles/Contacto.css';
import contactoData from '../js/contactoData';

const Contacto = () => {
    return (
        <div className='main'>     
          <div className='main__title'>
            <h1>{contactoData.title}</h1>
          </div>
    
          <section className='contact__main-info'>
            <div className='contact__main_info-text'>
              <p>{contactoData.info}</p>
            </div>
    
            <div className='contact__main-img'>
              <img className='contact__img' src={contactoData.img} alt="pessoas a comerem juntas" />
            </div>
          </section>
        </div>
    )
}

export default Contacto