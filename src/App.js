import './App.css';
import Navbar from '../src/components/Navbar'
import { BrowserRouter, Route ,Routes } from 'react-router-dom';
import Contact from './components/Contact'
import Aboutus from './components/Aboutus'
import Cars from './components/Cars'
import Home from './components/Home'
import Error from './components/Error'
import Footer from './components/Footer';
function App() {
  return (
    <BrowserRouter>
    <div className="App" basename="/Car-Rental">
      <Navbar/>
    
    <Routes>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/aboutus'  element={<Aboutus/>}/>
        <Route path='/cars'  element={<Cars/>}/>
        <Route path='/Car-Rental' element={<Home/>}/>
        <Route path='*' element={<Error/>}/>
        </Routes>
        <Footer/> 
      </div> 
    </BrowserRouter>
  );
}

export default App;
