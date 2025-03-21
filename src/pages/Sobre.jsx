import sobreData from '../js/sobreData';
import './styles/sobre.css';

const Sobre = () => {
  return (
    <div className='main'>
      <div className='main__title'> 
        <h1>{sobreData.title}</h1>
      </div>
    
      <section className='main__wrapper-info'>
        <div className='main__info-text'>
          <p>{sobreData.description}</p>
        </div>
        
        <div className='main__wrapper-img'>
          <img className='about__img' src={sobreData.img} alt="senhora a cozinhar"/>
        </div>
      </section> 
    </div>
  )
}

export default Sobre;
