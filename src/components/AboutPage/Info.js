import React from 'react'
import img from '../../images/aboutBcg.jpeg'
import Title from '../Title'
export default function Info() {
    return (
        <section className='py-5'>
            <div className='container'>
                <div className="row">
                    <div className="col-10 mx-auto col-md-6 my-2">
                        <img src={img} 
                        className='img-fluid img-thumbnail' 
                        alt='about'
                        style={{background: "var(--DarkGrey)"}}/>
                    </div>
                    <div className='col-10 mx-auto col-md-6 my-2'>
                        <Title title={'About Us'}/>
                        <p className="text-lead text-muted my-3">TechStore was the first one-of-its kind large format specialist retail store that catered to all multi-brand digital gadgets 
                            and home electronic needs in India. Over a decade since its inception,
                             TechStore has almost become synonyms for all electronics needs, with its tech-savvy staff, product range, online presence 
                             and the will to help customers.With over 6000 products across 200 brands and 150+ stores across 40+ major cities of India, 
                             TechStore ensures that for each customer, a Brighter Tomorrow begins Today!
                             The range is a perfect fit, for those who desire a completely feature-packed and quality product.</p>
                        <button className='main-link' style={{marginTop:'1rem'}}>More Info</button>
                    </div>
                </div>
            </div>
            
        </section>
    )
}
