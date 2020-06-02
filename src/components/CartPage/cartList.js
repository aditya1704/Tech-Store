import React from 'react'
import {ProductConsumer} from '../../context/context'
import CartItem from './cartItem'
export default function cartList() {
    return (
        <section>
            <ProductConsumer>
                {value=>{
                    const {cart,increment,decrement,removeProduct}=value
                    if (cart.length===0){
                        return <h1 className='text-title text-center my-4'>Your Cart is Empty</h1>
                    }else{
                    return(
                        <div className='container-fluid d-lg-block text-center my-5'>
                            {cart.map(item=>{
                                return (
                                    <CartItem key={item.id} increment={increment} decrement={decrement} removeProduct={removeProduct} item={item}/>
                                )
                            })}
                        </div>
                    )
                }
                }}
            </ProductConsumer>
        </section>
    )
}
