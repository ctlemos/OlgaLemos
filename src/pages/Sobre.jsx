import sobreData from '../assets/js/sobreData';
import './styles/sobre.css';
import PageWrapper from '../components/PageWrapper';

const Sobre = () => {
  return (
    <PageWrapper>
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
    </PageWrapper>
  )
}

export default Sobre;
