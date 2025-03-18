import { BrowserRouter, Routes, Route} from 'react-router-dom';

//COMPONENTS
import Navbar from './components/Navbar';
import Footer from './components/Footer';

//PAGES
import Home from './pages/Home';
import Sobre from './pages/Sobre';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
          <Routes>
            <Route index element={<Home/>} />
            <Route path='/sobre' element={<Sobre/>} />
          </Routes>
        <Footer />
      </BrowserRouter> 
    </>
  )
}

export default App;