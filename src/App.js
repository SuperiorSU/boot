import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import { useEffect, useState } from 'react';
import Main from './component/main';
import { Route, Routes } from 'react-router';
import Addcart from './component/Addcart';
import { Card } from 'react-bootstrap';

function App() {
  const [products, setProducts] = useState([]);
  const [cartt, setCart] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("http://localhost:9000")
      .then(response => response.json())
      .then(data => {
        setProducts(data);
        console.log(data);
      })
      .catch(err => console.log(err));
  }, []);
console.log(cartt)
  const addHandle = (id) => {
    const productToAdd = products.filter(item => item.id === id);
    // console.log(productToAdd)
    if (productToAdd) {
      setCart(prev => [...prev, ...productToAdd]); // as fitler return object in arry
      setCount(prevCount => prevCount + 1); 
    }
  }

  const removeHandle = (id) => {
    const newCart = cartt.filter(item => item.id !== id);
    setCart(newCart);
    setCount(prevCount => prevCount - 1); 
  }

  return (
    <div>
      <Header count={count} />
      <Routes>
        <Route path='/' element={<Main cart={cartt} addHandle={addHandle} setCart={setCart} products={products} setCount={setCount} setProducts={setProducts} />} />
        <Route path='/addcart' element={<Addcart removeHandle={removeHandle} cart={cartt} setCart={setCart} />} />
      </Routes>

      
    </div>
  );
}

export default App;
