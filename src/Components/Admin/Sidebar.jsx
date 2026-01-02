import React from "react";
import Breadcrum from "../Partials/Breadcrum";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <>
      <div className="list-group">
        <NavLink
          to="/admin"
          className="list-group-item active mt-1 rounded-2"
          aria-current="true"
        >
          <i className="fa fa-home"></i>
          <span className="float-end">Home</span>
        </NavLink>
        
        <NavLink
          to="/admin/Maincategory"
          className="list-group-item active mt-1 rounded-2"
          aria-current="true"
        >
          <i className="fa fa-list"></i>
          <span className="float-end">Maincategory</span>
        </NavLink>
        
        <NavLink
          to="/admin/Subcategory"
          className="list-group-item active mt-1 rounded-2"
          aria-current="true"
        >
          <i className="fa fa-list"></i>
          <span className="float-end">Subcategory</span>
        </NavLink>
        <NavLink
          to="/admin/Brand"
          className="list-group-item active mt-1 rounded-2"
          aria-current="true"
        >
          <i className="fa fa-list"></i>
          <span className="float-end">Brand</span>
        </NavLink>
        <NavLink
          to="/admin/Product"
          className="list-group-item active mt-1 rounded-2"
          aria-current="true"
        >
          <i className="fa fa-list"></i>
          <span className="float-end">Product</span>
        </NavLink>
        <NavLink
          to="/admin/Testimonial"
          className="list-group-item active mt-1 rounded-2"
          aria-current="true"
        >
          <i className="fa fa-star"></i>
          <span className="float-end">Testimonial</span>
        </NavLink>
        <NavLink
          to="/admin/Users"
          className="list-group-item active mt-1 rounded-2"
          aria-current="true"
        >
          <i className="fa fa-users"></i>
          <span className="float-end">Users</span>
        </NavLink>
        <NavLink
          to="/admin/Newsletter"
          className="list-group-item active mt-1 rounded-2"
          aria-current="true"
        >
          <i className="fa fa-envelope"></i>
          <span className="float-end">Newsletter</span>
        </NavLink>
        <NavLink
          to="/admin/Contactus"
          className="list-group-item active mt-1 rounded-2"
          aria-current="true"
        >
          <i className="fa fa-phone"></i>
          <span className="float-end">Contactus</span>
        </NavLink>
        <NavLink
          to="/admin/Checkouts"
          className="list-group-item active mt-1 rounded-2"
          aria-current="true"
        >
          <i className="fa fa-shopping-bag"></i>
          <span className="float-end">Checkouts</span>
        </NavLink>
      </div>
    </>
  );
}
