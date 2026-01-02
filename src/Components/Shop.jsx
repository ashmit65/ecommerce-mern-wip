import React from "react";
import { useDispatch, useSelector } from "react-redux";

import Breadcrum from "./Partials/Breadcrum";

import { getProduct } from "../Redux/Actioncreators/ProductActionCreate";
import { getMaincategory } from "../Redux/Actioncreators/MaincategoryActionCreate";
import { getBrands } from "../Redux/Actioncreators/MaincategoryActionCreate";
import { getSubcategory } from "../Redux/Actioncreators/MaincategoryActionCreate";

export default function Shop() {
  let [products, setProducts] = useState([]);
  let [maincategory, setMaincategory] = useState([]);
  let [subcategory, setSubcategory] = useState([]);
  let [brand, setBrand] = useState([]);

  let dispatch = useDispatch() 
    let ProductStateData = useSelector(state=> state.ProductStateData)
    let MaincategoryStateData = useSelector(state => state.MaincategoryStateData)
    let SubcategoryStateData = useSelector(state => state.SubcategoryStateData)
    let BrandStateData = useSelector(state => state.BrandStateData)

    useEffect(() =>{
      (()=>{
          dispatch(getProduct())
          if(ProductStateData.length)
              setProducts(ProductStateData)
      })()
  },[ProductStateData.length])
  
  useEffect(() =>{
      (()=>{
          dispatch(getMaincategory())
          if(MaincategoryStateData.length)
              setMaincategory(MaincategoryStateData)
      })()
  },[MaincategoryStateData.length])

  return (
    <>
      <Breadcrum title="Shop" />
    </>
  );
}
