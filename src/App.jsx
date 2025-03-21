import { BrowserRouter, Routes, Route} from 'react-router-dom';

//COMPONENTS
import Navbar from './components/Navbar';
import Footer from './components/Footer';

//PAGES
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Servicos from './pages/Servicos';
import Contacto from './pages/Contacto';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
          <Routes>
            <Route index element={<Home/>} />
            <Route path='/sobre' element={<Sobre/>} />
            <Route path='/servicos' element={<Servicos/>} />
            <Route path='/contacto' element={<Contacto/>} />
          </Routes>
        <Footer />
      </BrowserRouter> 
    </>
  )
}

export default App;