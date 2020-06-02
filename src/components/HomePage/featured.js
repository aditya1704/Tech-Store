import React from 'react'
import {ProductConsumer} from '../../context/context'
import Product from '../Product'
import Title from '../Title'
import {Link} from 'react-router-dom'
export default function featured() {
    return (
        <section className='py-2'>
            <div className="container">
                <Title title='featured products' center='center'/>
                <div className="row">
                    <ProductConsumer>
                        {value=>{
                            const {featuredProducts}=value
                            return(
                            featuredProducts.map((item)=>(
                                    <Product key={item.id} product={item}/>
                            ))
                            )
                        }}
                    </ProductConsumer>
                </div>
                <div className="row">
                    <div className=' offset-md-5 col-md-3'>
                        <Link to='/products' className='main-link my-4 '>Our Products</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}