import React from 'react'
import  {Link} from 'react-router-dom'
import Hero from '../components/Hero'
import img from '../images/singleProductBcg.jpeg'
import {ProductConsumer} from '../context/context'

export default function SingleProductPage() {
    return (
        <div>
            <Hero img={img} title='single product'/>
            <ProductConsumer>
                {value=>{
                    const {singleProduct,loading,addToCart}=value
                    if(loading){
                        return <h1>Loading...</h1>
                    }
                    const {company,title,description,price,image,id}=singleProduct
                    return(
                        <section className='py-5'>
                            <div className='container'>
                                <div className='row'>
                                    <div className='col-10 mx-auto col-sm-8 col-md-6 my-3'>
                                        <img src={`../${image}`} alt='product' className='img-fluid mb-4'></img>
                                    
                                    </div>
                                    <div className='col-10 mx-auto col-sm-8 col-md-6 my-3'>
                                    <h3 className='text-tilte mb-4'>Model: {title}</h3>
                                        <h5 className='text-muted text-capitalize mb-4'>Company: {company}</h5>
                                        <h5 className='text-main text-capitalize mb-4'>Price: Rs.{price}</h5>
                                        <h6 className='mb-4'>About Product: {description}</h6>
                                        <Link className='main-link' onClick={()=>addToCart(id)} >Add To Cart</Link>
                                        <Link className='main-link ml-5'  to='/products'>Go Back To Products</Link>
                                    </div>
                                </div>
                            </div>
                        </section>
                    )
                }}
            </ProductConsumer>
        </div>
    )
}
