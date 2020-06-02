import React from 'react'
import Hero from '../components/Hero'
import Title from '../components/Title'
import img from '../images/storeBcg.jpeg'
import Cart from '../components/CartPage/cart' 
export default function CartPage() {
    return (
        <>
        <Hero img={img} />
        <div className='mt-3'>
            <Title title='products in your cart' center='center'/>
        </div>
        <Cart/>
        </>
    )
}
