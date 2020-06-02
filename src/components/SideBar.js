import React from 'react'
import {ProductConsumer} from '../context/context';
import styled from 'styled-components'
import {Link }from 'react-router-dom'


export default function SideBar() {
    return (
        
            <ProductConsumer >
                {value=>{
                   const {links,handleSideBar,sideBarOpen} =value
                    return(
                        <SidebarWrapper show={sideBarOpen}>
                            <ul>
                                {links.map((link)=>{
                                    return(
                                    <li key={link.id}>
                                        <Link to={link.path} className="sidebar-link" onClick={handleSideBar}>{link.text}</Link>
                                    </li>
                                    )
                                })}
                            </ul>
                        </SidebarWrapper>
                    )
                }}
            </ProductConsumer>  
        
    )
}

const SidebarWrapper=styled.nav`
position: fixed;
top:60px;
left:0;
width:100%;
height:100%;
background:var(--mainGrey);
z-index:1;
border-right:4px solid var(--primaryColor);
transition:var(--mainTransition);
transform:${props=>(props.show?'translateX(0)':'translateX(-100%)')};
ul{
    list-style-type: none ;
    padding:0 !important;
}
.sidebar-link{
    display:block;
    font-size:1.5rem;
    text-transform:capitalize;
    color:var(--mainBlack);
    padding: 0.5rem 1.5rem;
    background:transparent;
    transition:var(--mainTransition);
    text-decoration:none !important;
}
.sidebar-link:hover {
    background:var(--primaryColor);
    color:var(--mainWhite);
    padding: 0.5rem 1.5rem 0.5rem 2.5rem;
    text-decoration:none !important;
}
@media (min-width:576px){
    width:20rem;
}

`