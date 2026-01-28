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
  let [flag, setFlag] = useState(false);
  let [search, setSearch] = useState("");

  let [mc, setMc] = useState("All");
  let [sc, setSc] = useState("All");
  let [br, setBr] = useState("All");
  let [min, setMin] = useState(0);
  let [max, setMax] = useState(0);

  let location = useLocation();
  const safe = (v) => encodeURIComponent(v);

  let dispatch = useDispatch();
  let ProductStateData = useSelector((state) => state.ProductStateData);
  let MaincategoryStateData = useSelector(
    (state) => state.MaincategoryStateData
  );
  let SubcategoryStateData = useSelector((state) => state.SubcategoryStateData);
  let BrandStateData = useSelector((state) => state.BrandStateData);

  function filterData(mc, sc, br, min = -1, max = -1) {
    let data = ProductStateData.filter(
      (x) =>
        (mc === "All" || x.maincategory === mc) &&
        (sc === "All" || x.subcategory === sc) &&
        (br === "All" || x.brand === br)
    );
    if (min !== -1 && max !== -1) {
      data = data.filter((x) => x.finalPrice >= min && x.finalPrice <= max);
    }
    setProducts(data);
  }

  function sortFilter(option) {
    if (option === "1") {
      setProducts(products.sort((x, y) => y.id.localeCompare(x.id)));
    } else if (option === "2") {
      setProducts(products.sort((x, y) => y.finalPrice - x.finalPrice));
    } else {
      setProducts(products.sort((x, y) => x.finalPrice - y.finalPrice));
    }
    setFlag(!flag);
  }

  function priceFilter(e) {
    e.preventDefault();
    filterData(mc, sc, br, min, max);
  }

  // function postSearch(e) {
  //   e.preventDefault()
  //   let ch = search.toLowerCase()
  //   setSearch(ProductStateData.filter((x) => x.name.toLowerCase().includes(ch)))
  // }

  function postSearch(e) {
    e.preventDefault();

    const ch = search.toLowerCase().trim();

    const filtered = ProductStateData.filter(
      (x) =>
        x.name.toLowerCase().includes(ch) ||
        x.maincategory.toLowerCase() === ch ||
        x.subcategory.toLowerCase() === ch ||
        x.brand.toLowerCase() === ch ||
        x.color.toLowerCase() === ch ||
        x.description?.toLowerCase().includes(ch)
    );

    setProducts(filtered); // ✅ update products list
  }

  useEffect(() => {
    (() => {
      dispatch(getProduct());
    })();
  }, [ProductStateData.length]);

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    setMc(query.get("mc") ?? "All");
    setSc(query.get("sc") ?? "All");
    setBr(query.get("br") ?? "All");
    filterData(
      query.get("mc") ?? "All",
      query.get("sc") ?? "All",
      query.get("br") ?? "All"
    );
    // console.log(query.get("mc"),query.get("sc"),query.get("br"))
  }, [location, ProductStateData]);

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
              <Link
                to={`/shop?mc=All&sc=${sc}&br=${br}`}
                className="list-group-item list-group-item-action"
              >
                All
              </Link>
              {maincategory.map((item, index) => {
                if (item.active)
                  return (
                    <Link
                      to={`/shop?mc=${item.name}&sc=${sc}&br=${br}`}
                      key={index}
                      className="list-group-item list-group-item-action"
                    >
                      {item.name}
                    </Link>
                  );
              })}
            </div>
            <div className="list-group mb-3">
              <p
                className="list-group-item list-group-item-action active"
                aria-current="true"
              >
                Subcategory
              </p>
              <Link
                to={`/shop?mc=${mc}&sc=All&br=${br}`}
                className="list-group-item list-group-item-action"
              >
                All
              </Link>
              {subcategory.map((item, index) => {
                if (item.active)
                  return (
                    <Link
                      to={`/shop?mc=${mc}&sc=${item.name}&br=${br}`}
                      key={index}
                      className="list-group-item list-group-item-action"
                    >
                      {item.name}
                    </Link>
                  );
              })}
            </div>
            <div className="list-group mb-3">
              <p
                className="list-group-item list-group-item-action active"
                aria-current="true"
              >
                Brand
              </p>
              <Link
                to={`/shop?mc=All&sc=All&br=${br}`}
                className="list-group-item list-group-item-action"
              >
                All
              </Link>
              {brand.map((item, index) => {
                if (item.active)
                  return (
                    <Link
                      to={`/shop?mc=${mc}&sc=${sc}&br=${safe(item.name)}`}
                      key={index}
                      className="list-group-item list-group-item-action"
                    >
                      {item.name}
                    </Link>
                  );
              })}
            </div>

            <div className="mb-3">
              <h5 className="bg-primary text-center p-2 text-light rounded">
                Price Filter
              </h5>
              <form onSubmit={priceFilter}>
                <div className="mb-3">
                  <label>Min Amount</label>
                  <input
                    type="number"
                    onClick={(e) => setMin(e.target.value)}
                    name="min"
                    placeholder="Min Amount"
                    className="form-control border-2 border-primary"
                  />
                </div>
                <div className="mb-3">
                  <label>Max Amount</label>
                  <input
                    type="number"
                    name="max"
                    onClick={(e) => setMax(e.target.value)}
                    placeholder="Max Amount"
                    className="form-control border-2 border-primary"
                  />
                </div>
                <button type="submit" className="btn btn-primary w-100">
                  Submit
                </button>
              </form>
            </div>
          </div>
          <div className="col-md-10">
            <div className="row">
              <div className="col-md-8">
                <form onSubmit={postSearch}>
                  <div className="btn-group w-100">
                    <input
                      type="text"
                      onChange={(e) => setSearch(e.target.value)}
                      name="search"
                      className="search-input form-control border-primary border-2 w-100"
                      placeholder="Search"
                    />
                    <button type="submit" className="btn btn-primary">
                      Search
                    </button>
                  </div>
                </form>
              </div>
              <div className="col-md-4">
                <select
                  name="sort"
                  onChange={(e) => sortFilter(e)}
                  className="form-control border-primary border-2"
                >
                  <option value="1">Latest</option>
                  <option value="2">Price : High to Low</option>
                  <option value="3">Price : Low to High</option>
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

    </>
  );
}
