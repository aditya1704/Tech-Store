import React from 'react'

import {ProductConsumer} from '../context/context';
import {FaBars,FaShoppingCart} from 'react-icons/fa'
import logo from '../images/logo.svg'
import styled from 'styled-components'
export default function Navbar() {
    return (
    <>
        
        <ProductConsumer>
        {value=>{
            const {cartItems,handleSideBar,handleCart}=value
            return( 
                <NavWrapper>
                    <div className="nav-center">
                        
                            <FaBars className='nav-icon' onClick={handleSideBar}/>
                            <img src={logo} alt="Tech Logo"/>
                            <div className="nav-cart">
                                <FaShoppingCart className='nav-icon' onClick={handleCart}/>     
                                <div className='cart-items'>{cartItems}</div>  
                            </div>
                    </div>
                </NavWrapper>
            )   
        }}
        </ProductConsumer>
           
    </>
    )
}

const NavWrapper=styled.nav`
position:-webkit-sticky;
position:sticky;
top:0;
width:100%;
padding:1rem 0;
background:var(--mainGrey);
border-bottom: 3px solid var(--primaryColor);
z-index:1;
.nav-center{
    display:flex;
    align-items:center;
    justify-content:space-between;
    max-width:1170px;
    margin:0 auto;
}
.nav-icon{
    font-size:1.5rem;
    cursor:pointer;
}
.nav-cart{
    position:relative;
}
.cart-items{
    background:var(--primaryColor);
    color:var(--mainWhite);
    font-size:0.85rem;
    position:absolute;
    top:-8px;
    right:-8px;
    padding:0 5px;
    border-radius:50%;
}

`