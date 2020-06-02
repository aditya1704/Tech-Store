import React, { Component } from 'react'
import {FaDolly,FaDollarSign,FaRedo} from 'react-icons/fa'
import styled from 'styled-components'

export default class services extends Component {
    state={
        services:[
            {
                id:1,
                icon:<FaDolly/>,
                title:'Free shipping',
                text:'The Tech Store at your front door'
            },
            {
                id:2,
                icon:<FaRedo/>,
                title:'30 days return policy',
                text:"Easy returns and exchanges T&C applied "
            },
            {
                id:3,
                icon:<FaDollarSign/>,
                title:'Secure Payment',
                text:'Guaranteed Safe Checkouts'
            }
        ]
    }
    render() {
        return (
            <ServicesWrapper>
                <div className="container">
                    <div className="row">
                        {
                            this.state.services.map((service)=>(
                                <div className="col-10 col-sm-6 col-md-4 mt-2" >
                                    <div className='icon'>{service.icon}</div>
                                    <h2>{service.title}</h2>
                                    <h5>{service.text}</h5>
                                </div>

                            ))
                        }
                    </div>
                </div>
            </ServicesWrapper>
        )
    }
}

const ServicesWrapper =styled.div`
background:rgba(95,183,234,0.5);
.icon{
    color:var(--primaryColor);
    font-size:2.5rem;
    text-align:center;
    margin-bottom:1.5rem;
}
h2,h5{
    text-align:center;
    color:var(--DarkGrey);
}
`