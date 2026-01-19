import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
      
        <div className="container-fluid topbar px-0 px-lg-4 custom-bg py-2 d-none d-lg-block "> {/* bg-light remove custom-bgv   */}
            <div className="container ">
                <div className="row gx-0 align-items-center ">
                    <div className="col-lg-8 text-center text-lg-start mb-lg-0 ">
                        <div className="d-flex flex-wrap">
                            <div className="border-end border-primary pe-3 ">
                                <Link to="https://maps.app.goo.gl/oESXkguG15BaNnJk6" target='_blank' className="text-muted small"><i className="fas fa-map-marker-alt text-primary me-2"></i>My Location</Link>
                            </div>
                            <div className="ps-3">
                                <Link to="mailto:ashmits554@gmail.com" target="_blank" rel='noreferrer' className="text-muted small"><i className="fas fa-envelope text-primary me-2"></i>ashmits554@gmail.com</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 text-center text-lg-end">
                        <div className="d-flex justify-content-end">
                            <div className="d-flex pe-3">
                                <Link className="btn p-0 text-primary me-3" to="#" target="_blank" rel='noreferrer'><i className="fab fa-facebook-f"></i></Link>
                                <Link className="btn p-0 text-primary me-3" to="#" target="_blank" rel='noreferrer'><i className="fab fa-twitter"></i></Link>
                                <Link className="btn p-0 text-primary me-3" to="#" target="_blank" rel='noreferrer'><i className="fab fa-instagram"></i></Link>
                                <Link className="btn p-0 text-primary me-0" to="#" target="_blank" rel='noreferrer'><i className="fab fa-linkedin-in"></i></Link>
                            </div>
                            {/* <div className="dropdown ms-3">
                                <Link to="#" className="dropdown-toggle text-dark" data-bs-toggle="dropdown"><small><i className="fas fa-globe-europe text-primary me-2"></i> English</small></Link>
                                <div className="dropdown-menu rounded">
                                    <Link to="#" className="dropdown-item">English</Link>
                                    <Link to="#" className="dropdown-item">Bangla</Link>
                                    <Link to="#" className="dropdown-item">French</Link>
                                    <Link to="#" className="dropdown-item">Spanish</Link>
                                    <Link to="#" className="dropdown-item">Arabic</Link>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        

        
        <div className="container-fluid nav-bar px-0 px-lg-4 py-lg-0 custom-bg">
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light"> 
                    <Link to="/" className="navbar-brand p-0">
                        <h1 className="text-primary mb-0"><i className="fa fa-shopping-bag me-2"></i> Ecom</h1>
                        {/* <!-- <img src="img/logo.png" alt="Logo"/> --> */}
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span className="fa fa-bars"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="navbar-nav mx-0 mx-lg-auto">
                            <Link to="/" className="nav-item nav-link active">Home</Link>
                            <Link to="/about" className="nav-item nav-link">About</Link>
                            {/* <Link to="/services" className="nav-item nav-link">Services</Link> */}
                            <Link to="/shop" className="nav-item nav-link">Shop</Link>
                            
                            <Link to="/contact-us" className="nav-item nav-link">Contact</Link>
                            <Link to="/admin" className="nav-item nav-link">Admin</Link>
                            <div className="nav-btn px-3">
                                <button className="btn-search btn btn-primary btn-md-square rounded-circle flex-shrink-0" data-bs-toggle="modal" data-bs-target="#searchModal"><i className="fas fa-search"></i></button>
                                {/* <Link to="#" className="btn btn-primary rounded-pill py-2 px-4 ms-3 flex-shrink-0"> Get a Quote</Link> */}
                            </div>
                        </div>
                    </div>
                    <div className="d-none d-xl-flex flex-shrink-0 ps-4">
                        <Link to="tel:9540503529" target="_blank" rel='noreferrer' className="btn btn-light btn-lg-square rounded-circle position-relative wow tada" data-wow-delay=".9s">
                            <i className="fa fa-phone-alt fa-2x"></i>
                            <div className="position-absolute" style={{top: "7px", right: "12px"}}>
                                <span><i className="fa fa-comment-dots text-secondary"></i></span>
                            </div>
                        </Link>
                        <div className="d-flex flex-column ms-3">
                            <span>Call to Our Experts</span>
                            <Link to="tel:919540503529" target="_blank" rel='noreferrer'><span className="text-dark">NOTFree:9540503529</span></Link>
                        </div>
                    </div>
                    <div className="collapse navbar-collapse ms-3" id="navbarCollapse">
                        <div className="navbar-nav mx-0 mx-lg-auto">
                            <div className="nav-item dropdown">
                                <Link to="#" className="nav-link" data-bs-toggle="dropdown">
                                    <span className="dropdown-toggle">Asmit</span>
                                </Link>
                                <div className="dropdown-menu">
                                    <Link to="#" className="dropdown-item">Profile</Link>
                                    <Link to="#" className="dropdown-item">Cart</Link>
                                    <Link to="#" className="dropdown-item">Checkout</Link>
                                    <button className="dropdown-item">Logout</button>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </nav>
            </div>
        </div>
       

        
        <div className="modal fade" id="searchModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-fullscreen">
                <div className="modal-content rounded-0">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Search by keyword</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body d-flex align-items-center bg-primary">
                        <div className="input-group w-75 mx-auto d-flex">
                            <input type="search" className="form-control p-3" placeholder="keywords" aria-describedby="search-icon-1"/>
                            <span id="search-icon-1" className="btn bg-light border nput-group-text p-3"><i className="fa fa-search"></i></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </>
  )
}
