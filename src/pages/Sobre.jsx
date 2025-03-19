import sobreData from '../js/sobreData';
import './styles/sobre.css';

const Sobre = () => {
  return (
    <div className='about__main'>
      <div className='about__main-title'> 
        <h1>{sobreData.title}</h1>
      </div>
    
      <section className='about__main_wrapper-info'>
        <div className='about__main_info-text'>
          <p>{sobreData.description}</p>
        </div>
        
        <div className='about__main_wrapper-img'>
          <img className='about__img' src={sobreData.img} alt="senhora a cozinhar"/>
        </div>
      </section> 
    </div>
  )
}

export default Sobre;
