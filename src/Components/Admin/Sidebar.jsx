import React from "react";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const linkClass = ({ isActive }) =>
    `list-group-item sidebar-link d-flex align-items-center gap-3 ${
      isActive ? "active" : ""
    }`;

  return (
    <div className="list-group sidebar shadow-sm rounded-4 p-3">
      <NavLink to="/admin" className={linkClass}>
        <i className="fa fa-home"></i>
        <span>Dashboard</span>
      </NavLink>

      <NavLink to="/admin/Maincategory" className={linkClass}>
        <i className="fa fa-layer-group"></i>
        <span>Main Category</span>
      </NavLink>

      <NavLink to="/admin/Subcategory" className={linkClass}>
        <i className="fa fa-list"></i>
        <span>Sub Category</span>
      </NavLink>

      <NavLink to="/admin/Brand" className={linkClass}>
        <i className="fa fa-tags"></i>
        <span>Brands</span>
      </NavLink>

      <NavLink to="/admin/Product" className={linkClass}>
        <i className="fa fa-box"></i>
        <span>Products</span>
      </NavLink>

      <NavLink to="/admin/Testimonial" className={linkClass}>
        <i className="fa fa-star"></i>
        <span>Testimonials</span>
      </NavLink>

      <NavLink to="/admin/Users" className={linkClass}>
        <i className="fa fa-users"></i>
        <span>Users</span>
      </NavLink>

      <NavLink to="/admin/Newsletter" className={linkClass}>
        <i className="fa fa-envelope"></i>
        <span>Newsletter</span>
      </NavLink>

      <NavLink to="/admin/Contactus" className={linkClass}>
        <i className="fa fa-phone"></i>
        <span>Contact Us</span>
      </NavLink>

      <NavLink to="/admin/Checkouts" className={linkClass}>
        <i className="fa fa-shopping-bag"></i>
        <span>Checkouts</span>
      </NavLink>
    </div>
  );
}
