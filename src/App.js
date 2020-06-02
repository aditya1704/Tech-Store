import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import {Switch,Route} from 'react-router-dom'
import Home from './pages/HomePage'
import About from './pages/AboutPage'
import Default from './pages/DefaultPage'
import Cart from './pages/CartPage'
import Products from './pages/ProductsPage'
import SingleProduct from './pages/SingleProductPage'
import Contact from './pages/ContactPage'
import Navbar from './components/Navbar'
import SideBar from './components/SideBar'
import SideCart from './components/SideCart'
import Footer from './components/Footer'

function App() {
  return (
    <>
    <Navbar/>   
    <SideBar/>
    <SideCart/>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/about' exact component={About}/>
        <Route path='/contact' exact component={Contact}/>
        <Route path='/cart' exact component={Cart}/>
        <Route path='/products' exact component={Products}/>
        <Route path='/products/:id' exact component={SingleProduct}/>
        <Route  component={Default}/>
      </Switch>
      <Footer/>
    </>
  );
}

export default App;
