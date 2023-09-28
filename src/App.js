import './App.css';
import { Routes, Route } from "react-router-dom"

import Cart from './components/Cart';
import ProductList from './components/ProductList';

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element = {<ProductList />}/>
        <Route path='/cart' element = {<Cart />}/>
      </Routes>
    </>
  );
}

export default App;
