import './App.css';
import Navbar from '../src/components/Navbar'
import { HashRouter, Route ,Routes } from 'react-router-dom';
import Contact from './components/Contact'
import Aboutus from './components/Aboutus'
import Cars from './components/Cars'
import Home from './components/Home'
import Error from './components/Error'
import Footer from './components/Footer';
function App() {
  return (
    <HashRouter>
    <div className="App">
      <Navbar/>
    
    <Routes>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/aboutus'  element={<Aboutus/>}/>
        <Route path='/cars'  element={<Cars/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='*' element={<Error/>}/>
        </Routes>
        <Footer/> 
      </div> 
    </HashRouter>
  );
}

export default App;
