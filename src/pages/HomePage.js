import React from 'react'
import Hero from '../components/Hero'
import{Link} from 'react-router-dom'
import Featured from '../components/HomePage/featured'
import Services from '../components/HomePage/services'
import Slider from '../components/HomePage/slider'
export default function Home() {
    return (
    <> 
    <Hero title='Awesome Gadgets' max="true">
        <Link to='/products' className='main-link' style={{margin:'2rem'}}>Our Products</Link>
    </Hero>
    <Services/>
    <Featured/>
    <Slider/>
    </>
    )
}

