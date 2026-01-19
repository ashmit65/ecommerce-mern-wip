import React, { useEffect, useRef, useState } from "react";
// import Breadcrum from '../../Partials/Breadcrum'
import Sidebar from "../Sidebar";
import { Link, useNavigate, useParams } from "react-router-dom";
import formValidator from "../../FormValidators/formValidator";
import { useDispatch, useSelector } from "react-redux";
import {
  getProduct,
  updateProduct,
} from "../../../Redux/Actioncreators/ProductActionCreate";
import imageValidator from "../../FormValidators/imageValidator";

import {createProduct} from "../../../Redux/Actioncreators/ProductActionCreate"
import { getMaincategory } from "../../../Redux/Actioncreators/MaincategoryActionCreate";
import { getSubcategory } from "../../../Redux/Actioncreators/SubcategoryActionCreate";
import { getBrand } from "../../../Redux/Actioncreators/BrandActionCreate";

// var rte;

export default function AdminUpdateProduct() {
  // var refdiv=useRef(null);
  
  let [maincategory, setMaincategory] = useState([]); // before it was all only alldata and setAlldata and
  let [products, setProducts] = useState([]); // before it was all only alldata and setAlldata and
  let [subcategory, setSubcategory] = useState([]);
  let [brand, setBrand] = useState([]);
  let [flag, setFlag] = useState(false)
  let [data, setData] = useState({
    name: "",
    maincategory: "",
    subcategory: "",
    brand: "",
    color: "",
    size: "",
    basePrice: "",
    discount: "",
    finalPrice: "",
    stock: true,
    quantity: "",
    pic: [],
    description: "",
    active: true,
  });
  let [errorMessage, setErrorMessage] = useState({
    name: "",
    color: "",
    size: "",
    basePrice: "",
    discount: "",
    quantity: "",
    pic: "",
    description: "",

  });
  let [show, setShow] = useState(false);
  let [loading, setLoading] = useState(true);
  let navigate = useNavigate();
  let { id } = useParams();
  let dispatch = useDispatch([]);
  let ProductStateData = useSelector((state) => state.ProductStateData);
  let MaincategoryStateData = useSelector(
    (state) => state.MaincategoryStateData
  ); //it was productstatedata
  let SubcategoryStateData = useSelector((state) => state.SubcategoryStateData);
  let BrandStateData = useSelector((state) => state.BrandStateData);

  function getInputData(e) {
    var name = e.target.name;
    var value = e.target.files
      ? data.pic.concat(Array.from(e.target.files).map((item) => "/products/" + item?.name))
      : e.target.value;
    if (name !== "active") {
      setErrorMessage((old) => {
        return {
          ...old,
          [name]: name === "pic" ? imageValidator(e) : formValidator(e),
        };
      });
    }
    setData((old) => {
      return {
        ...old,
        [name]:
          name === "active" || name === "stock"
            ? value === "1"
              ? true
              : false
            : value,
      };
    });
  }
  function postData(e) {
    e.preventDefault();
    console.log(data.pic);
    let error = Object.values(errorMessage).find((x) => x !== "");
    console.log(errorMessage);
    if (error) setShow(true);
    else {
      let basePrice = parseInt(data.basePrice)
      let discount = parseInt(data.discount)
      let finalPrice = parseInt(basePrice - basePrice * discount/100)
      dispatch(updateProduct({ ...data,
        id:id,
        maincategory:data.maincategory===""?( maincategory.length > 0 ? maincategory[0]?.name || "" : ""):data.maincategory,
        subcategory:data.subcategory===""? (subcategory.length > 0 ? subcategory[0]?.name || "" : ""):data.subcategory,
        brand:data.brand===""? (brand.length > 0 ? brand[0]?.name || "" : ""):data.brand,
        basePrice:basePrice,
        discount:discount,
        finalPrice:finalPrice,
        quantity:parseInt(data.quantity),
        // description:rte.getHTMLCode()
      }));
      navigate("/admin/product");
    }
  }
  
  useEffect(() => {
    dispatch(getProduct());
    dispatch(getMaincategory());
    dispatch(getSubcategory());
    dispatch(getBrand());
  }, []);

  useEffect(() => {
    if (ProductStateData.length && id) {
      const product = ProductStateData.find((x)=>x.id === id);
      if (product) {
        setData(product);
        setLoading(false);
      }
    }
  }, [ProductStateData, id]);

  useEffect(() => {
    if (MaincategoryStateData.length)
      setMaincategory(MaincategoryStateData.filter((x) => x.active === true));
  }, [MaincategoryStateData]);
  
  useEffect(() => {
    if (SubcategoryStateData.length)
      setSubcategory(SubcategoryStateData.filter((x) => x.active === true));
  }, [SubcategoryStateData]);
  
  useEffect(() => {
    if (BrandStateData.length)
      setBrand(BrandStateData.filter((x) => x.active === true));
  }, [BrandStateData]);

  if (loading) {
    return (
      <div className="container-fluid my-3">
        <div className="row">
          <div className="col-xl-2 col-md-3">
            <Sidebar />
          </div>
          <div className="col-xl-10 col-md-9">
            <div className="text-center my-5">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
              <p>Loading product data...</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // useEffect(()=>{
  //   rte=new window.RichTextEditor(refdiv.current);
  //   rte.setHTMLCode("");
  // }, []) 

  return (
    <>
      {/* <Breadcrum title="Admin"/>  */}
      <div className="container-fluid my-3">
        <div className="row">
          <div className="col-xl-2 col-md-3">
            <Sidebar />
          </div>
          <div className="col-xl-10  col-md-9">
            <h5 className="bg-primary text-center p-2 text-light">
              <Link to="/admin/product/create">
                <i className="fa fa-arrow-left text-light float-end"></i>
              </Link>
              Product
            </h5>
            <form onSubmit={postData}>
            <div className="mb-3">
                <label>Name*</label>
                <input
                  value={data.name}
                  type="text"
                  name="name"
                  onChange={getInputData}
                  placeholder="Product Name"
                  className={`form-control ${
                    show && errorMessage.name
                      ? "border-danger"
                      : "border-primary"
                  } border-2`}
                />
                {show && errorMessage.name ? (
                  <p className="text-danger text-capitalize">
                    {errorMessage.name}
                  </p>
                ) : (
                  ""
                )}
              </div>

              <div className="row">
                <div className="col-md-3 col-sm-6 mb-3">
                  <label>Maincategor*</label>
                  <select
                    value={data.maincategory}
                    name="maincategory"
                    onChange={getInputData}
                    className="form-control border-primary border-2"
                  >
                    {maincategory.length > 0 ? (
                      maincategory.map((item, index) => {
                        return <option key={index}>{item.name}</option>;
                      })
                    ) : (
                      <option value="">No categories available</option>
                    )}
                  </select>
                </div>
                <div className="col-md-3 col-sm-6 mb-3">
                  <label>Subcategor*</label>
                  <select
                  value={data.subcategory}
                    name="subcategory"
                    onChange={getInputData}
                    className="form-control border-primary border-2"
                  >
                    {subcategory.length > 0 ? (
                      subcategory.map((item, index) => {
                        return <option key={index}>{item.name}</option>;
                      })
                    ) : (
                      <option value="">No subcategories available</option>
                    )}
                  </select>
                </div>
                <div className="col-md-3 col-sm-6 mb-3">
                  <label>Brand*</label>
                  <select
                  value={data.brand}
                    name="brand"
                    onChange={getInputData}
                    className="form-control border-primary border-2"
                  >
                    <option value="">Select Brand</option>{" "}
                    {brand.length > 0 ? (
                      brand.map((item, index) => {
                        return (
                          <option key={index} value={item.name}>
                            {item.name}
                          </option>
                        );
                      })
                    ) : (
                      <option value="">No brands available</option>
                    )}
                  </select>
                </div>
                <div className="col-md-3 col-sm-6 mb-3">
                  <label>Stock*</label>
                  <select
                    value={data.stock?"1":"0"}
                    name="stock"
                    onChange={getInputData}
                    className="form-control border-primary border-2"
                  >
                    <option value="1">Yes</option>
                    <option value="0">no</option>
                  </select>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6 mb-3">
                  <label>Color*</label>
                  <input
                  value={data.color}
                    type="text"
                    name="color"
                    onChange={getInputData}
                    placeholder="Product Color"
                    className={`form-control ${
                      show && errorMessage.color
                        ? "border-danger"
                        : "border-primary"
                    } border-2`}
                  />
                  {show && errorMessage.color ? (
                    <p className="text-danger text-capitalize">
                      {errorMessage.color}
                    </p>
                  ) : (
                    ""
                  )}
                </div>

                <div className="col-md-6 mb-3">
                  <label>Size*</label>
                  <input
                  value={data.size}
                    type="text"
                    name="size"
                    onChange={getInputData}
                    placeholder="Product Size"
                    className={`form-control ${
                      show && errorMessage.size
                        ? "border-danger"
                        : "border-primary"
                    } border-2`}
                  />
                  {show && errorMessage.size ? (
                    <p className="text-danger text-capitalize">
                      {errorMessage.size}
                    </p>
                  ) : (
                    ""
                  )}
                </div>
              </div>

              <div className="row">
                <div className="col-md-6 mb-3">
                  <label>Base Price*</label>
                  <input
                  value={data.basePrice}
                    type="number"
                    name="basePrice"
                    onChange={getInputData}
                    placeholder="Product Base Price"
                    className={`form-control ${
                      show && errorMessage.basePrice
                        ? "border-danger"
                        : "border-primary"
                    } border-2`}
                  />
                  {show && errorMessage.basePrice ? (
                    <p className="text-danger text-capitalize">
                      {errorMessage.basePrice}
                    </p>
                  ) : (
                    ""
                  )}
                </div>

                <div className="col-md-6 mb-3">
                  <label>Discount*</label>
                  <input
                  value={data.discount}
                    type="number"
                    name="discount"
                    onChange={getInputData}
                    placeholder="Product Discount"
                    className={`form-control ${
                      show && errorMessage.discount
                        ? "border-danger"
                        : "border-primary"
                    } border-2`}
                  />
                  {show && errorMessage.discount ? (
                    <p className="text-danger text-capitalize">
                      {errorMessage.discount}
                    </p>
                  ) : (
                    ""
                  )}
                </div>
              </div>

              <div className="mb-3">
                <label>Description</label>
                {/* <textarea name="description" onChange={getInputData} placeholder="Description" className={`form-control ${show && errorMessage.description? "border-danger":"border-primary"} border-2`} row={8 }></textarea> */}

                  <textarea 
                  value={data.description}
                  name="description" 
                  onChange={getInputData} 
                  placeholder="Description" 
                  className={`form-control ${show && errorMessage.description? "border-danger":"border-primary"} border-2`} 
                  rows={8}>
                </textarea>

              </div>

              <div className="row">
                <div className="col-md-6 mb-3">
                  <label>Stock Quantity*</label>
                  <input
                  value={data.quantity}
                    type="number"
                    name="quantity"
                    onChange={getInputData}
                    placeholder="Stock Quantity"
                    className={`form-control ${
                      show && errorMessage.quantity
                        ? "border-danger"
                        : "border-primary"
                    } border-2`}
                  />
                  {show && errorMessage.quantity ? (
                    <p className="text-danger text-capitalize">
                      {errorMessage.quantity}
                    </p>
                  ) : (
                    ""
                  )}
                </div>

                <div className="col-md-6 mb-3">
                  <label>Pic</label>
                  <input
                  
                    type="file"
                    name="pic"
                    onChange={getInputData}
                    multiple
                    placeholder="file"
                    className={`form-control ${
                      show && errorMessage.pic
                        ? "border-danger"
                        : "border-primary"
                    } border-2`}
                  />
                  {show && errorMessage.pic
                    ? errorMessage.pic
                        .join("|")
                        .split("|")
                        .map((item, index) => {
                          return (
                            <p
                              className="text-danger text-capitalize"
                              key={index}
                            >
                              {item}
                            </p>
                          );
                        })
                    : ""}
                </div>

                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label>Active</label>
                    <select
                    value={data.active?"1":"0"}
                      name="active"
                      onChange={getInputData}
                      className={`form-control ${
                        show && errorMessage.active
                          ? "border-danger"
                          : "border-primary"
                      } border-2`}
                    >
                      <option value="1">Yes</option>
                      <option value="0">No</option>
                    </select>
                  </div>
                  <div className="col-md-6 mb-3">
                    <label>Old Pics(Click to Remove)</label>
                    <div>
                      {
                        data.pic && data.pic.length > 0 ? (
                          data.pic.map((item,index)=>{
                            return <img key={index}
                            onClick={()=>{
                              const newPics = [...data.pic];
                              newPics.splice(index, 1);
                              setData({...data, pic: newPics});
                              setFlag(!flag);
                            }}
                            height={80} className="mx-1" width={80} src={item} alt="Product Image"/>
                          })
                        ) : (
                          <p>No images available</p>
                        )
                      }
                    </div>
                  </div>
                </div>
              </div>
              <div className='mb-3'>
                <button type='submit' className='btn btn-primary p-2'>Update</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}