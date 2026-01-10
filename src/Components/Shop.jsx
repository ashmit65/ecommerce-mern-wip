import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Breadcrum from "./Partials/Breadcrum";
import ProductsContainer from "./Partials/ProductsContainer";

import { getProduct } from "../Redux/Actioncreators/ProductActionCreate";
import { getMaincategory } from "../Redux/Actioncreators/MaincategoryActionCreate";
import { getBrand } from "../Redux/Actioncreators/BrandActionCreate";
import { getSubcategory } from "../Redux/Actioncreators/SubcategoryActionCreate";
import { Link } from "react-router-dom";

export default function Shop() {
  let [products, setProducts] = useState([]);
  let [maincategory, setMaincategory] = useState([]);
  let [subcategory, setSubcategory] = useState([]);
  let [brand, setBrand] = useState([]);

  let [mc, setMc] = useState("All");
  let [sc, setSc] = useState("All");
  let [br, setBr] = useState("All");

  let dispatch = useDispatch();
  let ProductStateData = useSelector((state) => state.ProductStateData);
  let MaincategoryStateData = useSelector(
    (state) => state.MaincategoryStateData
  );
  let SubcategoryStateData = useSelector((state) => state.SubcategoryStateData);
  let BrandStateData = useSelector((state) => state.BrandStateData);

  useEffect(() => {
    (() => {
      dispatch(getProduct());
      if (ProductStateData.length) setProducts(ProductStateData);
    })();
  }, [ProductStateData.length]);

  useEffect(() => {
    (() => {
      dispatch(getMaincategory());
      if (MaincategoryStateData.length) setMaincategory(MaincategoryStateData);
    })();
  }, [MaincategoryStateData.length]);

  useEffect(() => {
    (() => {
      dispatch(getSubcategory());
      if (SubcategoryStateData.length) setSubcategory(SubcategoryStateData);
    })();
  }, [SubcategoryStateData.length]);

  useEffect(() => {
    (() => {
      dispatch(getBrand());
      if (BrandStateData.length) setBrand(BrandStateData);
    })();
  }, [BrandStateData.length]);

  return (
    <>
      {/* <Breadcrum title="Shop" /> */}

      <div className="container-fluid my-2">
        <div className="row">
          <div className="col-md-2 my-5">
            <div className="list-group mb-3">
              <p
                className="list-group-item list-group-item-action active"
                aria-current="true"
              >
                Maincategory
              </p>
              <a className="list-group-item list-group-item-action">
                All
              </a>
              {
                maincategory.map((item,index)=>{
                  if(item.active)
                  return <Link to={`/shop?mc=All&sc`} key={index} class="list-group-item list-group-item-action">
                  {item.name}
                </Link>
                })
              }
              
            </div>
            <div className="list-group mb-3">
              <p
                className="list-group-item list-group-item-action active"
                aria-current="true"
              >
                Subcategory
              </p>
              <a className="list-group-item list-group-item-action">
                All
              </a>
              {
                subcategory.map((item,index)=>{
                  if(item.active)
                  return <a href="#" key={index} class="list-group-item list-group-item-action">
                  {item.name}
                </a>
                })
              }
              
            </div>
            <div className="list-group mb-3">
              <p
                className="list-group-item list-group-item-action active"
                aria-current="true"
              >
                Brand
              </p>
              <a className="list-group-item list-group-item-action">
                All
              </a>
              {
                brand.map((item,index)=>{
                  if(item.active)
                  return <a href="#" key={index} class="list-group-item list-group-item-action">
                  {item.name}
                </a>
                })
              }
            </div>

              <div className="mb-3">
                <h5 className="bg-primary text-center p-2 text-light rounded">Price Filter</h5>
                <form action="">
                  <div className="mb-3">
                    <label>Min Amount</label>
                    <input type="number" name="min" placeholder="Min Amount" className="form-control border-2 border-primary"/>
                  </div>
                  <div className="mb-3">
                    <label>Max Amount</label>
                    <input type="number" name="max" placeholder="Max Amount" className="form-control border-2 border-primary"/>
                  </div>
                  <button type="submit" className="btn btn-primary w-100">Submit</button>
                </form>
              </div>

          </div>
          <div className="col-md-10">
            <div className="row">
              <div className="col-md-8">
                <form action="">
                  <div className="btn-group w-100">
                    <input type="text" name="search" className="search-input form-control border-primary border-2 w-100" placeholder="Search"/>
                    <button type="submit" className="btn btn-primary">Search</button>
                  </div>
                </form>
              </div>
              <div className="col-md-4">
                <select name="" className="form-control border-primary border-2" >
                  <option value="1">Latest</option>
                  <option value="2">Price : High to Low</option>
                  <option value="2">Price : Low to High</option>
                </select>
              </div>
            </div>
            <ProductsContainer title="All Prodcuts" data={products} />
          </div>
        </div>
      </div>
    </>
  );
}
