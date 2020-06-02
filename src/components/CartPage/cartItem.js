import React from 'react'
import {FaChevronCircleDown} from 'react-icons/fa'
import {FaChevronCircleUp} from 'react-icons/fa'
import {RiDeleteBin6Line} from 'react-icons/ri'
export default function cartItem({item,increment,decrement,removeProduct}) {
    return (
        <section>
            <div className='row mt-5 mt-lg-0 text-center align-items-center  my-5'>
                <div className='col-10 mx-auto col-lg-2 mb-2'>
                    <img src={item.image} width='60' alt='product' className='img-fluid'/>
                </div>
                <div className='col-10 mx-auto col-lg-2 mb-2'>
                    <span className='text-uppercase d-lg-none'>Product: </span>{item.title}
                </div>
                <div className='col-10 mx-auto col-lg-2 mb-2'>
                    <span className='text-uppercase d-lg-none'>Price: </span>Rs.{item.price}
                </div>
                <div className='col-10 mx-auto col-lg-2 mb-2'>
                    <p className='text-uppercase'><FaChevronCircleDown className='mr-2 cart-icon text-primary' onClick={()=>decrement(item.id)}/> 
                    {item.count} 
                    <FaChevronCircleUp className='ml-2 cart-icon text-primary' onClick={()=>increment(item.id)}/>
                    </p>
                </div>
                <div className='col-10 mx-auto col-lg-2 mb-2'>
                    <p className='text-uppercase'><RiDeleteBin6Line className='text-danger cart-icon' onClick={()=>removeProduct(item.id)}/></p>
                </div>
                <div className='col-10 mx-auto col-lg-2 mb-2'>
                    <span className='text-uppercase d-lg-none text-muted'>Total: </span>Rs.{item.total}
                </div>
            </div>
        </section>
    )
}
