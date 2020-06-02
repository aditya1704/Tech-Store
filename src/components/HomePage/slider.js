import React from 'react'
import {ProductConsumer} from '../../context/context'
import Title from '../Title'
import Carousel from 'react-bootstrap/Carousel'
import styled from 'styled-components'

export default function slider() {
    return (
        <ProductConsumer>
            {value=>{
                const {filteredProducts}=value
                let appleProducts=filteredProducts.filter(item=>item.company==='apple')
                let samsungProducts=filteredProducts.filter(item=>item.company==='samsung')
                return(
                    <section>
                        <SliderWrapper>
                            <Title title='Apple Products'/>

                            <div className='container-fluid my-5'>
                                <Carousel  w='100'>
                                    
                                {appleProducts.map((item,index)=>{
                                    return(
                                        <Carousel.Item style={{height:'400px'}}>
                                            <img style={{height:"300px"}} src={item.image} alt='first-slide' className='d-block'/>
                                            <Carousel.Caption style={{color:'black',fontWeight:'bold'}}>
                                                <h3>{item.title}</h3>
                                            </Carousel.Caption>
                                        </Carousel.Item>
                                    )
                                })}
                        
                                </Carousel>   
                            </div>

                            <Title title='Samsung Products'/>
                            <div className='container-fluid my-5'>
                                <Carousel  w='100'>
                                    
                                {samsungProducts.map((item,index)=>{
                                    return(
                                        <Carousel.Item style={{height:'400px'}}>
                                            <img style={{height:"300px"}} src={item.image} alt='first-slide' className='d-block'/>
                                            <Carousel.Caption style={{color:'black',fontWeight:'bold'}}>
                                                <h3>{item.title}</h3>
                                            </Carousel.Caption>
                                        </Carousel.Item>
                                    )
                                })}
                        
                                </Carousel>   
                            </div>
                        </SliderWrapper> 
                    </section>
                )
            }}
        </ProductConsumer>
    )
}

const SliderWrapper=styled.div`
.carousel{
    z-index:-1;
}
.carousel-inner img{
    margin:auto;
}
.carousel-indicators li{
    margin:10px;
    background-color:var(--DarkGrey);
}
.carousel-indicators .active{
    background-color:black;
}
.carousel-control-prev,.carousel-control-next{
    background-color:var(--DarkGrey)
}
`