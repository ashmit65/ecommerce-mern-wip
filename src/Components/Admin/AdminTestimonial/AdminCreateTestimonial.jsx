import React, { useEffect, useState } from 'react'
// import Breadcrum from '../../Partials/Breadcrum'
import Sidebar from '../Sidebar'
import { Link, useNavigate } from 'react-router-dom'

import formValidator from '../../FormValidators/formValidator'
import imageValidator from '../../FormValidators/imageValidator'

import {getTestimonial, createTestimonial, TestimonialStateData} from "../../../Redux/Actioncreators/TestimonialActionCreate"
import { useDispatch, useSelector } from 'react-redux'
export default function AdminCreateTestimonial() {
  let [allData, setAllData] = useState([])
  let [data, setData] = useState({
    name:"",
    pic:"",
    message:"",
    active:true
  })
  let [errorMessage, setErrorMessage] = useState({
    name: "Name is Mendatory",
    pic: "Pic is Mendatory",
    message: "Message is Mendatory"
  })
  let [show,setShow] = useState(false)
  let navigate = useNavigate()
  let dispatch = useDispatch([])
  let TestimonialStateData = useSelector(state=>state.TestimonialStateData)

  function getInputData(e){
    var name = e.target.name
    var value = e.target.files?"/testimonials/"+e.target.files[0].name: e.target.value
    if(name!=="active"){
      setErrorMessage((old)=>{
        return{
          ...old,
          [name]:name === "pic"?imageValidator(e):formValidator(e)
        }
      })
    }
    setData((old)=>{
      return{
        ...old,
      [name]:name==="active"?(value==="1"?true:false) : value
      }
    })
  }
   function postData(e){
    e.preventDefault()
    let error = Object.values(errorMessage).find((x)=>x!=="")
    if(error)
      setShow(true)
    else{
      let item = allData.find((x)=>x.name?.toLowerCase()===data.name.toLowerCase())
      if(item){
        setShow(true)
          setErrorMessage((old)=>{
            return{
              ...old,
              'name':"Testimonial Name is Already Exist"
            }
          })
      }
      else{
        dispatch(createTestimonial({...data}))
        navigate("/admin/testimonial")
      }
      
    }
  }
  useEffect(()=>{
    (()=>{
      dispatch(getTestimonial())
    if(TestimonialStateData.length)
      setAllData(TestimonialStateData)
    else
    setAllData([])
    })()
  },[TestimonialStateData.length])
  return (
    <>
      {/* <Breadcrum title="Admin"/>  */}
      <div className="container-fluid my-3">
        <div className="row">
            <div className="col-xl-2 col-md-3">
                <Sidebar/>
            </div>
            <div className="col-xl-10  col-md-9">
            <h5 className='bg-primary text-center p-2 text-light'><Link to="/admin/testimonial/create"><i className='fa fa-arrow-left text-light float-end'></i></Link>Testimonial</h5>
            <form onSubmit={postData}>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label>Name*</label>
                  <input type="text" name="name" onChange={getInputData} placeholder='Testimonial Name' className={`form-control ${show && errorMessage.name? "border-danger":"border-primary"} border-2`} />
                  {show && errorMessage.name? <p className='text-danger text-capitalize'>{errorMessage.name}</p>:""}
                </div>

                <div className="col-md-6 mb-3">
                  <label>Pic*</label>
                  <input type="file" name="pic" onChange={getInputData} placeholder='file' className={`form-control ${show && errorMessage.pic? "border-danger":"border-primary"} border-2`} />
                  {show && errorMessage.pic? <p className='text-danger text-capitalize'>{errorMessage.pic}</p>:""}
                </div>

                <div className="mb-3">
                  <label>Message*</label>
                  <textarea name="message" onChange={getInputData} placeholder="Message" className={`form-control ${show && errorMessage.pic? "border-danger":"border-primary"} border-2`} row={5}></textarea>
                   {show && errorMessage.message? <p className='text-danger text-capitalize'>{errorMessage.message}</p>:""}
                </div>

                <div className="row">
                  <div className='col-md-6 mb-3'>
                  <label>Active</label>
                  <select name="active" onChange={getInputData}  className={`form-control ${show && errorMessage.active? "border-danger":"border-primary"} border-2`}>
                    <option value="1">Yes</option>
                    <option value="0">No</option>
                  </select>
                </div>
                </div>
              </div>
              <div className='mb-3'>
                <button type='submit' className='btn btn-primary p-2'>Create</button>
              </div>
            </form>
           </div>
        </div>
      </div>
    </>
  )
}
