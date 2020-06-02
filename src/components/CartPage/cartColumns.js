import React from 'react'

export default function cartColumns() {
    return (
        <section>
            <div className='container-fluid d-none d-lg-block text-center my-5'>
                <div className='row'>
                    <div className='col-lg-2'>
                        <p className='text-uppercase'>Products</p>
                    </div>
                    <div className='col-lg-2'>
                        <p className='text-uppercase'>Porduct name</p>
                    </div>
                    <div className='col-lg-2'>
                        <p className='text-uppercase'>price</p>
                    </div>
                    <div className='col-lg-2'>
                        <p className='text-uppercase'>quantity</p>
                    </div>
                    <div className='col-lg-2'>
                        <p className='text-uppercase'>remove</p>
                    </div>
                    <div className='col-lg-2'>
                        <p className='text-uppercase'>Total</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
