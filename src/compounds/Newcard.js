import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';
import img from './img/img1.jpg';
import img2 from './img/img 22.jpg';
import img4 from './img/img 4.jpg'
import Navabar from './navabar';
import Header from './Header';
import ReactStars from "react-rating-stars-component"






function Newcard(props) {

    const [cart, SetCart] = useState(0);

// const ratingStyle = {
     
// }
const    change = ()=>{
    SetCart(0)
 }


    return (
        <div>
       <Navabar cart={cart} change={change}/>
           
         <Header/>
           
           
            <div className="container">
                <div className='row mt-3 row-cols-1'>
                    {/* card -1 */}
                    <div className="  col-md-3    ">
                        <div className='card' style={{ width: "15rem",height: "21rem" }}>
                            <img src={img} className="card-img-top img-fulid" alt="..." style={{ width: "14rem", height: "12rem" }} />
                            <div className='card-body' style={{ textAlign: "center" }} >
                                <h5 className="card-title">Dell laptop</h5>
                                <p>$40.00 - $80.00</p>
                                <button type="button"  className='btn btn-dark'>view option</button>
                            </div>
                        </div>
                    </div>
                    {/* card-2 */}
                    <div className=" col-md-3 ">
                        <div className='card' style={{ width: "15rem", height: "21rem" }}>
                            <img src={img2} className="card-img-top  img-fulid" alt="..." style={{ width: "14rem", height: "12rem" }} />
                            <div className='card-body' style={{ textAlign: "center" }}>
                                <h5 className="card-title">HP laptop</h5>
                                
                                <ReactStars  class="d-flex align-items-md-center"  isHalf={true} size ={25}count={5} ></ReactStars>
                                
                                
                              
                                <p><s>$100.00</s> - $80.00</p>
                                <button type="button " onClick={() => SetCart(cart + 1)} className='btn btn-dark'>Add cart</button>
                            </div>
                        </div>
                    </div>
                    {/* card 3 */}
                    <div className=" col-md-3  ">
                        <div className='card' style={{ width: "15rem", height: "21rem" }}>
                            <img src={img2} className="card-img-top  img-fulid" alt="..." style={{ width: "14rem", height: "12rem" }} />
                            <div className='card-body' style={{ textAlign: "center" }}>
                                <h5 className="card-title">Apple macbook</h5>
                                <p><s>$120.00</s> - $80.00</p>
                                <button type="button" onClick={() => SetCart(cart + 1)} className='btn btn-dark'>Add cart</button>
                            </div>
                        </div>
                    </div>
                    {/* card -4 */}
                    <div className="  col-md-3 ">
                        <div className='card' style={{ width: "15rem",height: "21rem" }}>
                            <img src={img4} className="card-img-top  img-fulid" alt="..." style={{ width: "15rem", height: "12rem" }} />
                            <div className='card-body' style={{ textAlign: "center" }}>
                                <h5 className="card-title">Lenovo</h5>
                                 <ReactStars    isHalf={true} size ={25}count={5}/>
                                <p><s>$80.00</s> - $60.00</p>
                                <button type="button " onClick={() => SetCart(cart + 1)} className='btn btn-dark'>Add cart </button>
                            </div>
                        </div>
                    </div>
                   
                </div>
                {/* next row */}
                 <div className='row  mt-4'>
                    {/* card 5 */}
                 <div className="  col-md-3 ">
                        <div className='card' style={{ width: "15rem",height: "21rem" }}>
                            <img src={img4} className="card-img-top  img-fulid" alt="..." style={{ width: "15rem", height: "12rem" }} />
                            <div className='card-body' style={{ textAlign: "center" }}>
                                <h5 className="card-title">Lenovo</h5>
                                 <ReactStars    style={{ textAlign: "center" }}  isHalf={true} size ={25}count={5}/>
                                <p><s>$80.00</s> - $60.00</p>
                                <button type="button " onClick={() => SetCart(cart + 1)} className='btn btn-dark'>Add cart </button>
                            </div>
                        </div>
                    </div>
                       {/* card 6 */}


                       <div className=" col-md-3  ">
                        <div className='card' style={{ width: "15rem", height: "21rem" }}>
                            <img src={img2} className="card-img-top  img-fulid" alt="..." style={{ width: "14rem", height: "12rem" }} />
                            <div className='card-body' style={{ textAlign: "center" }}>
                                <h5 className="card-title">Apple macbook</h5>
                                <p><s>$120.00</s> - $80.00</p>
                                <button type="button" onClick={() => SetCart(cart + 1)} className='btn btn-dark'>Add cart</button>
                            </div>
                        </div>
                    </div>
                    {/* card 7 */}
                    <div className=" col-md-3 ">
                        <div className='card' style={{ width: "15rem", height: "21rem" }}>
                            <img src={img2} className="card-img-top  img-fulid" alt="..." style={{ width: "14rem", height: "12rem" }} />
                            <div className='card-body' style={{ textAlign: "center" }}>
                                <h5 className="card-title">HP laptop</h5>
                                 <ReactStars    isHalf={true} size ={23}count={5}/>
                                <p><s>$100.00</s> - $80.00</p>
                                <button type="button "  className='btn btn-dark'>view option</button>
                            </div>
                        </div>
                    </div>
                        {/* card 8 */}
                        <div className="  col-md-3    ">
                        <div className='card' style={{ width: "15rem",height: "21rem" }}>
                            <img src={img} className="card-img-top img-fulid" alt="..." style={{ width: "14rem", height: "12rem" }} />
                            <div className='card-body' style={{ textAlign: "center" }} >
                                <h5 className="card-title">Dell laptop</h5>
                                <p>$40.00 - $80.00</p>
                                <button type="button"  className='btn btn-dark'>view option</button>
                            </div>
                        </div>
                    </div>
                 </div>

            </div>
        </div>

    )
}

export default Newcard;