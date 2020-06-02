import React from 'react'
import CartColumns from './cartColumns'
import CartList from './cartList'
import CartTotal from './cartTotal'
export default function cart() {
    return (
        <div>
            <CartColumns/>
            <CartList />
            <CartTotal/>
        </div>
    )
}
