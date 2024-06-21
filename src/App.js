
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Product from './Pages/Product';
import Shop from './Pages/Shop';
import Cart from './Pages/Cart'
import ShopCategory from './Pages/ShopCategory'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './Pages/LoginPage';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assets/banner_mens.png'
import women_banner from './Components/Assets/banner_women.png'
import kids_banner from './Components/Assets/banner_kids.png'

function App() {
  return (
    <div >
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/mens' element={<ShopCategory banner={men_banner} category="men"/>}/>
        <Route path='/womens' element={<ShopCategory banner={women_banner} category="women"/>}/>
        <Route path='/kids' element={<ShopCategory banner={kids_banner} category="kid"/>}/>
        <Route path="product" element= {<Product/>}>
          <Route path=':productId' element={<Product/>}>
             </Route>

        </Route>
        <Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/Login' element={<LoginPage/>}/>


        </Route>


      </Routes>
      <Footer/>
      </BrowserRouter>

    </div>
  );
}

export default App;
