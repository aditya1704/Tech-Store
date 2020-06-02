import React from 'react'
import Form from '../components/ContactPage/Form'
import Hero from '../components/Hero'
import img from '../images/contactBcg.jpeg'
export default function ContactPage() {
    return (
        <div>
            <Hero img={img}/>
            <Form />
        </div>
    )
}
