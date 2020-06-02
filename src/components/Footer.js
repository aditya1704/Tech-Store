import React from 'react'
import styled from 'styled-components'
import {ProductConsumer} from '../context/context'
export default function Footer() {
    return (
        <ProductConsumer>
            {value=>{
                const {socialLinks}=value
                return (
                <FooterWrapper>
                    <div className='container py-3'>
                        <div className='row'>
                            <div className='col-10 col-md-6'>
                                <p className='text-capitalize mt-2'> copyright &copy; Tech Store {new Date().getFullYear() } all rights reserved </p>
                            </div>
                            <div className='col-10 col-md-6'>
                                <ul>
                                    {socialLinks.map((link)=>(
                                    <li key={link.id} >
                                        <a href={link.url}>{link.icon}</a>
                                    </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                    </div>
                    
                </FooterWrapper>
                )
            }}
        </ProductConsumer>
    )
}

const FooterWrapper=styled.nav`
background:var(--DarkGrey);
color:var(--mainWhite);
li{
    font-size:1.5rem;
    display:inline-block;
    text-decoration:none;
    list-style-type:none;
}
a{
    margin-right:5rem;
    color:var(--mainWhite);
    transition:var(--mainTransition);
}
a:hover{
    color:var(--primaryColor);
    cursor:pointer;
}
`