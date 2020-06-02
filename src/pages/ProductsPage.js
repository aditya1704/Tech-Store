import React from 'react'
import {ProductConsumer} from '../context/context'
import Product from '../components/Product'
import Title from '../components/Title'
import Hero from '../components/Hero'
import img from '../images/productsBcg.jpeg'
import ProductFilter from '../components/ProductFilter'

export default function ProductsPage() {
    return (
        <div>
            <Hero img={img} />
            <ProductConsumer>
                {value=>{
                    const {filteredProducts}=value
                    return(
                        <div className='container my-5'>
                            <Title title='Our Products' center='true'/>
                            <ProductFilter/>
                            <div className='row'>
                                <div className='col-10 mx-auto'>
                                    <h6 className='text-title'>Total:{filteredProducts.length}</h6>
                                </div>
                            </div>
                            <div className='row mt-5'>
                                {filteredProducts.length===0 ?
                                (<div className='col text-title text-center'>Sorry, no products match your search</div>):
                                (filteredProducts.map(product=>{
                                    return(
                                        <Product key={product.id} product={product} />
                                    )
                                }))
                                }
                                
                            </div>
                        </div>
                        
                    )
                }}
            </ProductConsumer>
        </div>
    )
}
