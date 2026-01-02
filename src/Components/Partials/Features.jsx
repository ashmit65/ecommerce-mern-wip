import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Features() {
  useEffect(() => {
    // Initialize WOW.js if it's available
    if (typeof window !== 'undefined' && window.WOW) {
      new window.WOW().init();
    }
  }, []);

  return (
    <>
      {/* <!-- Feature Start --> */}
        <div className="container-fluid feature bg-light py-5">
            <div className="container py-5">
                <div className="text-center mx-auto pb-5" style={{maxWidth: "800px"}}>
                    <h4 className="text-primary">Our Features</h4>
                    <h1 className="display-4 mb-4">Top Brand Products with upto 95% off </h1>
                    <p className="mb-0">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur adipisci facilis cupiditate recusandae aperiam temporibus corporis itaque quis facere, numquam, ad culpa deserunt sint dolorem autem obcaecati, ipsam mollitia hic.
                    </p>
                </div>
                <div className="row g-4">
                    <div className="col-md-6 col-lg-6 col-xl-3">
                        <div className="feature-item p-4 pt-0">
                            <div className="feature-icon p-4 mb-4">
                                <i className="far fa-handshake fa-3x"></i>
                            </div>
                            <h4 className="mb-4">Trusted Platform</h4>
                            <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea hic laborum odit pariatur...
                            </p>
                            <Link className="btn btn-primary rounded-pill py-2 px-4" to="/">Shop Now</Link>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-3">
                        <div className="feature-item p-4 pt-0">
                            <div className="feature-icon p-4 mb-4">
                                <i className="fa fa-dollar-sign fa-3x"></i>
                            </div>
                            <h4 className="mb-4">10 Days Return Policy</h4>
                            <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea hic laborum odit pariatur...
                            </p>
                            <a className="btn btn-primary rounded-pill py-2 px-4" href="#">Shop Now</a>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-3">
                        <div className="feature-item p-4 pt-0">
                            <div className="feature-icon p-4 mb-4">
                                <i className="fa fa-bullseye fa-3x"></i>
                            </div>
                            <h4 className="mb-4">Fast & Free Delivery</h4>
                            <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea hic laborum odit pariatur...
                            </p>
                            <a className="btn btn-primary rounded-pill py-2 px-4" href="#">Shop Now</a>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-3">
                        <div className="feature-item p-4 pt-0">
                            <div className="feature-icon p-4 mb-4">
                                <i className="fa fa-headphones fa-3x"></i>
                            </div>
                            <h4 className="mb-4">24/7 Fast Support</h4>
                            <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea hic laborum odit pariatur...
                            </p>
                            <a className="btn btn-primary rounded-pill py-2 px-4" href="#">Shop Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Feature End --> */}
    </>
  )
}
