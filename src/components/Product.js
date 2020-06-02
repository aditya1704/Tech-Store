import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {FaSearch,FaCartPlus} from 'react-icons/fa'
import {ProductConsumer} from '../context/context'
import {FaRupeeSign} from 'react-icons/fa'

export default function Product({product}) {
    const {title,image,id,price}=product
    return (
        <ProductConsumer>
            {value=>{ 
                const {addToCart,setSingleProduct}=value
                return(
                    <ProductWrapper className='col-10 col-sm-8 col-md-6 col-lg-4 mx-auto my-3'>
                        <div className='card'>
                            <div className='img-container'>
                                <img src={image} alt='featured' className='card-img-top p-5' style={{height:'320px '}}/>
                                <div className='icon-container'>
                                    <Link to={`/products/${id}`} ><FaSearch className='icon' onClick={()=>setSingleProduct(id)}/></Link>
                                    <FaCartPlus className='icon' onClick={()=>addToCart(id)} />
                                </div>
                            </div>
                            <div className='card-body d-flex justify-content-between'>
                                <p className='mb-0'>{title}</p>
                                <p className='mb-0'><FaRupeeSign/>{price}</p>
                            </div>
                        </div>
                    </ProductWrapper>
                )
            }}
            
        </ProductConsumer>
    )
}

const ProductWrapper= styled.div`
.card{
    box-shadow:5px 5px 5px 0px rgba(0,0,0,0.3);
    transition:var(--mainTransition);
    height:100%;
}
.card:hover{
    box-shadow:5px 5px 5px 0px rgba(0,0,0,0.5);
    cursor: pointer;
}
.card-img-top {
    transition: var(--mainTransition);
  }
  .card:hover .card-img-top {
    transform: scale(1.15);
    opacity: 0.2;
  }
  .img-container {
    position: relative;
  }
.icon-container{
    transition: var(--mainTransition);
    position: absolute;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);
    opacity:0;
}
.icon{
    font-size:2.5rem;
    margin:1rem;
    padding:0.5rem;
    color:var(--primaryColor);
    background:var(--mainBlack);
    border-radius:0.5rem;
}
.card:hover .icon-container{
    opacity:1;
}
.card-body {
    font-weight: bold;
    letter-spacing: 2px;
    text-transform: uppercase;
}























`