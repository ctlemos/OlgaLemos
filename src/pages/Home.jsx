import homeData from '../assets/js/homeData';
import './styles/home.css'

const Home = () => {
  return (
        <main className="home__main">
            <section className="home__main-page">
                <h1>{homeData.title}</h1>
                <h3>{homeData.subTitle}</h3>
            </section>
        </main>
    )
}

export default Home;