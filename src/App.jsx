import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { AnimatePresence } from "framer-motion";

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
      <AnimatePresence mode="wait">
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
      </AnimatePresence>
    </>
  )
}

export default App;