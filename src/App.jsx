import { BrowserRouter, Routes, Route} from 'react-router-dom';

//COMPONENTS
import Navbar from './components/Navbar';
import Footer from './components/Footer';

//PAGES
import Home from './pages/Home';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route index element={<Home/>}/>
          </Routes>
        <Footer />
      </BrowserRouter> 
    </>
  )
}

export default App;