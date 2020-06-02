import React from 'react'
import {Link} from 'react-router-dom'
import Hero from '../components/Hero'
import img from '../images/defaultBcg.jpeg'

export default function DefaultPage() {
    return (
        <div>
            <Hero img={img} max='true'>
                <h1 className='text-uppercase'>404 Page Not Found</h1>
                <Link to='/' className='main-link' style={{marginTop:'2rem'}}>Return Home</Link>
            </Hero>
        </div>
    )
}
