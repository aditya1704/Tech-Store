import React from 'react'
import {ProductConsumer} from '../context/context';
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {FaRupeeSign} from 'react-icons/fa'

export default function SideCart() {
    return (
        <ProductConsumer>
            {value=>{
                const {cartOpen,cart,closeCart,cartTotal}=value
                return(
                    <CartWrapper show={cartOpen} onClick={closeCart}>
                        <ul>
                        {cart.map(item=>{
                            return(
                                <li key={item.id} className='cart-item mb-4'>
                                    <img src={item.image} width='35' alt='cart'/>
                                    <h6 className=' text-uppercase mt-4'>{item.title}</h6>
                                    <h6 className='text-title'>Amount: {item.count}</h6>
                                </li>
                            )
                        })}
                        </ul>
                        <h4 className='text-main text-capitalize mx-2 '>Total : <FaRupeeSign/>{cartTotal}</h4>
                        <div className='text-center my-5'>
                            <Link to='/cart' className='main-link'>Go To Cart</Link>
                        </div>
                    </CartWrapper>
                )   
            }}
        </ProductConsumer>
    )
}

const CartWrapper=styled.nav`
position: fixed;
top:60px;
right:0;
width:100%;
height:100%;
background:var(--mainGrey);
z-index:1;
border-left:4px solid var(--primaryColor);
transition:var(--mainTransition);
transform:${props=>(props.show?'translateX(0)':'translateX(100%)')};

@media (min-width:576px){
    width:20rem;
}
overflow:scroll;
padding:2rem;
ul{
    padding:0 !important;
}
.cart-item{
    list-style-type:none;
}
`