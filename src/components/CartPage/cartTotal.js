import React from 'react'
import {ProductConsumer} from '../../context/context'
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
                            
                                <h3>Subtotal: Rs.{cartSubTotal}</h3>
                                <h3>Tax: Rs.{cartTax}</h3>
                                <h3>Total: Rs.{cartTotal}</h3>
                            </div>
                            
                        )
                    }}
                </ProductConsumer>
            </div>
        </div>

            
        
    )
}
