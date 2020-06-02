import React from 'react'
import {ProductConsumer} from '../../context/context'
import {FaRupeeSign} from 'react-icons/fa'

export default function cartTotal() {
    return (
        <div className='container'>
            <div className='row'>
                <ProductConsumer>
                    {value=>{
                        const {cartTotal,cartSubTotal,cartTax,clearCart}=value
                        return(
                            <div className='col text-center text-title my-4'>
                                <button className='btn btn-outline-danger text-capitalize mb-4' onClick={clearCart}>Clear Cart</button>
                            
                                <h3>Subtotal: <FaRupeeSign color='var(--primaryColor)'/> {cartSubTotal}</h3>
                                <h3>Tax: <FaRupeeSign color='var(--primaryColor)'/> {cartTax}</h3>
                                <h3>Total: <FaRupeeSign color='var(--primaryColor)'/> {cartTotal}</h3>
                            </div>
                            
                        )
                    }}
                </ProductConsumer>
            </div>
        </div>

            
        
    )
}
