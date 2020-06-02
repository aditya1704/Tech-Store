import React from 'react'
import Title from '../Title'
export default function Form() {
    return (
        <section>
            <Title title='Contact Us' center="center"/>
            <div className="container">
                <div className="row">
                    <div className="col-10 col-md-6 mx-auto my-3">
                    <form action="https://formspree.io/xknqjlnw" method="POST">
                        <div className="form-group row">
                            <input  type="text" className="form-control" placeholder="Jake" id="firstname" name="firstname"/>
                        </div>
                        <div className="form-group row">
                            <input  type="text" className="form-control" placeholder="Peralta" id="lastname" name="lastname"/>
                        </div>
                        <div class="form-group row">
                            <input type="email" className="form-control" placeholder="jakeperallta@emailid.com" id="emailid" name="emailid"/>
                        </div>
                        <div className="form-group row">
                            <div className='col-md-2'>
                                <input type="tel" className="form-control" placeholder="+91" id="areacode" name="areacode"/>
                            </div> 
                            <div className='col-md-10'>
                                <input type="telnum" className="form-control" placeholder="Phone Number" id="phonenumber" name="phonenumber"/>
                            </div>
                        </div>
                        <div class="form-group row">
                            <div className='my-2'>
                                <div class="form-check">
                                    <input type="checkbox" value="" name="approve" id="approve" class="form-check-input"/>
                                    <label class="form-check-label" for="approve">
                                        <strong>May We Contact You?</strong>
                                    </label>
                                </div>
                            </div>
                            <div className='mx-auto'>
                                <select class="form-control">
                                    <option>Tel No.</option>
                                    <option>Email</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-group row">
                            <div className='col-md-10'>
                                <textarea class="form-control" id="feedback" name="feedback" rows="12" placeholder="Help us get better with your feedback!!!"></textarea>
                            </div>
                        </div>
                        <div class="form-group row">
                            <button className='main-link my-2' type='submit' value='Send'>Submit</button> 
                        </div>
                    </form>
                    
                    </div>
                </div>
            </div>
            
        </section>
    )
}
