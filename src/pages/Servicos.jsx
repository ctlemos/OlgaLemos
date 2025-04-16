import servicosData, { products } from '../assets/js/servicosData';
import { useState, useRef} from 'react';
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import './styles/servico.css';


const Servicos = () => {

	const [menuItem, setMenuItem] = useState(products);
	const [showGallery, setShowGallery] = useState(false);
	const [selectedCategory, setSelectedCategory] = useState(null);
	const imageContainerRef = useRef(null);
	
	//gallery
	const filterItems = name => {
		const newItems = products.filter(item => item.name === name);
		setMenuItem(newItems);
        setShowGallery(true);
		setSelectedCategory(name);
	};

	//image slider
	const Prev = () => {
        imageContainerRef.current.scrollLeft -= 300;
    };
    const Next = () => {
        imageContainerRef.current.scrollLeft += 300;
    };


	return (
		<div className='main'>
			<div className='main__title'>
				<h1>{servicosData.title}</h1>
			</div>	

			<section className='servicos__main_card-wrapper'>
				<div className='servicos__main_card_wrapper-cards'>
					<button 
						className={`servicos__main_card_wrapper_cards-card ${selectedCategory === 'BOLOS' ? 'hover-effect' : ''}`} 
						onClick={() => filterItems('BOLOS')}>
						Bolos de Festa
					</button>
					<button 
						className={`servicos__main_card_wrapper_cards-card ${selectedCategory === 'SOBREMESAS' ? 'hover-effect' : ''}`} 
						onClick={() => filterItems('SOBREMESAS')}>
						Sobremesas 
					</button>
					<button 
						className={`servicos__main_card_wrapper_cards-card ${selectedCategory === 'FRUTAS' ? 'hover-effect' : ''}`} 
						onClick={() => filterItems('FRUTAS')}>
						Frutas
					</button>
					<button 
						className={`servicos__main_card_wrapper_cards-card ${selectedCategory === 'PRATOS-QUENTES' ? 'hover-effect' : ''}`} 
						onClick={() => filterItems('PRATOS-QUENTES')}>
						Pratos Quentes
					</button>
					<button 
						className={`servicos__main_card_wrapper_cards-card ${selectedCategory === 'TAPAS-PETISCOS' ? 'hover-effect' : ''}`} 
						onClick={() => filterItems('TAPAS-PETISCOS')}>
						Tapas & Petiscos
					</button>
				</div>
			</section>	
						
			{showGallery && menuItem.length > 0 && (
				<div className='slider__container'>
					<div className='slider__container-content'>
						<div className='slider__prev-btn' onClick={Prev}><FaArrowCircleLeft /></div>
						<div className='slider__panel' ref={imageContainerRef}>
							{menuItem.map((item, index) => (
								<div key={index}>
								<img src={item.img} title={item.name} alt={item.name} className='slide__img'/>
								</div>
							))}
						</div>
						<div className='slider__next-btn' onClick={Next}><FaArrowCircleRight /></div>
					</div>
					
					<div className='slider__container-btn'>
						<button className='btn-catalog'>
							<a href="https://www.facebook.com/docariaparabens/photos_by" target="_blank" rel="noopener noreferrer">Ver restante catálogo</a>
						</button>
					</div>
				</div>
			)} 
		</div>
	);
};

export default Servicos;