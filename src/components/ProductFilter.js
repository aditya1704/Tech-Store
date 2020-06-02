import React from 'react'
import styled from 'styled-components'
import {ProductConsumer} from '../context/context'
export default function ProductFilter() {
    return (
        <section>
            <ProductConsumer>
                {value=>{
                    const {search,min,max,price,company,shipping,storeProducts,handleChange}=value
                    let companies=new Set()//we use set because we do not want repeated company names
                    companies.add('all')
                    for (let product in storeProducts ){
                        companies.add(storeProducts[product]['company'])//adds all unique companies to the set
                    }
                    companies=[...companies]//converts set into array for looping through
                    return(
                        <div className='row my-5'>
                            <div className='col-10 mx-auto'>
                                <FilterWrapper>
                                    {/* Text-search */ }
                                    <div>
                                        <label htmlFor='search'>Search Products</label>
                                        <input type='text' name='search' id='search' className='filter-item' 
                                        onChange={handleChange} value={search}/>
                                    </div>
                                    {/**End of Text Search*/}
                                    {/**Company Filter */}
                                    <div>
                                        <label htmlFor='company' className='mr-2'>Company</label>
                                        <select name='company' id='company' className='filter-item' 
                                        onChange={handleChange} value={company}>
                                            {companies.map((company,index)=>{
                                                return <option key={index} value={company}>{company}</option>
                                            })}
                                        </select>
                                    </div>
                                    {/**End of Company Filter*/}
                                    {/**Price Filter */}
                                    <div>
                                        <label htmlFor='price'>
                                            <p className='mb-2'>Product Price:<span>Rs.{price}</span></p>
                                        </label>
                                        <input type='range' name='price' id='price' min={min} max={max} className='filter-price' 
                                        onChange={handleChange} value={price}/>
                                    </div>
                                    {/**End of Price Filter */}
                                    {/**Shipping filter */}
                                    <div>
                                        <label htmlFor='shipping' className='mx-2'>Free Shipping</label>
                                        <input type='checkbox' name='shipping' id='shipping' 
                                        onChange={handleChange} checked={shipping && true}/>
                                    </div>
                                    {/**End of Shipping Filter */}
                                </FilterWrapper>
                            </div>
                        </div>
                    )
                }}
            </ProductConsumer>
        </section>
    )
}

const FilterWrapper = styled.div`
display:grid;
grid-template-columns:repeat(auto-fit,minmax(200px,1fr));
grid-column-gap:2rem;
grid-row-end:1rem;
label{
    font-weight:bold;
    text-transform:capitalize;
}
.filter-item,.filter-price{
    display:block;
    width:100%;
    background:transparent;
    border-radius:0.5rem;
    border: 2px solid var(--DarkGrey);
}
`
