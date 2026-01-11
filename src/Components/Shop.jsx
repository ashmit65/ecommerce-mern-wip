import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Breadcrum from "./Partials/Breadcrum";
import ProductsContainer from "./Partials/ProductsContainer";

import { getProduct } from "../Redux/Actioncreators/ProductActionCreate";
import { getMaincategory } from "../Redux/Actioncreators/MaincategoryActionCreate";
import { getBrand } from "../Redux/Actioncreators/BrandActionCreate";
import { getSubcategory } from "../Redux/Actioncreators/SubcategoryActionCreate";
import { Link, useLocation } from "react-router-dom";

export default function Shop() {
  let [products, setProducts] = useState([]);
  let [maincategory, setMaincategory] = useState([]);
  let [subcategory, setSubcategory] = useState([]);
  let [brand, setBrand] = useState([]);

  let [mc, setMc] = useState("All");
  let [sc, setSc] = useState("All");
  let [br, setBr] = useState("All");

  let location = useLocation();
  const safe = (v) => encodeURIComponent(v);

  let dispatch = useDispatch();
  let ProductStateData = useSelector((state) => state.ProductStateData);
  let MaincategoryStateData = useSelector(
    (state) => state.MaincategoryStateData
  );
  let SubcategoryStateData = useSelector((state) => state.SubcategoryStateData);
  let BrandStateData = useSelector((state) => state.BrandStateData);

  function filterData(mc,sc,br){
      let data = [] 
      if(mc==="All" && sc==="All" && br==="All")
        data = ProductStateData
      else if (!mc==="All" && sc==="All" && br==="All")
        data = ProductStateData.filter(x=>x.maincategory===mc)
  }

  useEffect(() => {
    (() => {
      dispatch(getProduct());
    })();
  }, [ProductStateData.length]);

  useEffect(()=>{
    const query = new URLSearchParams(location.search)
    setMc(query.get("mc")??"All")
    setSc(query.get("sc")??"All")
    setBr(query.get("br")??"All")
    // console.log(query.get("mc"),query.get("sc"),query.get("br"))
  },[location])

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
              <Link to={`/shop?mc=All&sc=${sc}&br=${br}`} className="list-group-item list-group-item-action">
                All
              </Link>
              {
                maincategory.map((item,index)=>{
                  if(item.active)
                  return <Link to={`/shop?mc=${item.name}&sc=${sc}&br=${br}`} key={index} className="list-group-item list-group-item-action">
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
              <Link to={`/shop?mc=${mc}&sc=All&br=${br}`} className="list-group-item list-group-item-action">
                All
              </Link>
              {
                subcategory.map((item,index)=>{
                  if(item.active)
                  return <Link to={`/shop?mc=${mc}&sc=${item.name}&br=${br}`} key={index} className="list-group-item list-group-item-action">
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
                Brand
              </p>
              <Link to={`/shop?mc=All&sc=All&br=${br}`} className="list-group-item list-group-item-action">
                All
              </Link>
              {
                brand.map((item,index)=>{
                  if(item.active)
                  return <Link to={`/shop?mc=${mc}&sc=${sc}&br=${safe(item.name)}`} key={index} className="list-group-item list-group-item-action">
                  {item.name}
                </Link>
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
