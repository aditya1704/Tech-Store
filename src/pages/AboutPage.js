import React from 'react'
import img from '../images/aboutBcg.jpeg'
import Hero from '../components/Hero'
import Info from '../components/AboutPage/Info'
export default function AboutPage() {
    return (
        <div>
            <Hero img={img} />
            <Info />
            
        </div>
    )
}
