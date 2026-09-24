import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Navbarr from './Components/Navbarr';
import Header from './Components/Header';
import Products from './Components/Products';
import Footer from './Components/Footer';

function App() {

  return (
    <>
    <div className='parent'>
    <Navbarr/>
    <Header/>
    <Products/>
    <Footer/>

    </div>
    </>
  )
}

export default App
