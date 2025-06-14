import homeData from '../assets/js/homeData';
import './styles/home.css';
import PageWrapper from '../components/PageWrapper';

const Home = () => {
  return (
    <PageWrapper>
        <main className="home__main">
            <section className="home__main-page">
                <h1>{homeData.title}</h1>
                <h3>{homeData.subTitle}</h3>
            </section>
        </main>
    </PageWrapper>
    )
}

export default Home;