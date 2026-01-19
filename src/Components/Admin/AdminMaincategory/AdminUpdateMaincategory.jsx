import React, { useEffect, useState } from 'react'
// import Breadcrum from '../../Partials/Breadcrum'
import Sidebar from '../Sidebar'
import { Link, useNavigate, useParams } from 'react-router-dom'
import formValidator from '../../FormValidators/formValidator'
import { useDispatch, useSelector } from 'react-redux'
import {getMaincategory, updateMaincategory} from "../../../Redux/Actioncreators/MaincategoryActionCreate"


export default function AdminUpdateMaincategory() {
  let [allData, setAllData] = useState([])
  let [data, setData] = useState({
    name:"",
    active:true
  })
  let [errorMessage, setErrorMessage] = useState({
    name: ""
  })
  let [show,setShow] = useState(false)
  let navigate = useNavigate()
  let {id} = useParams()
  let dispatch = useDispatch([])
  let MaincategoryStateData = useSelector(state=>state.MaincategoryStateData)


  function getInputData(e){
    var {name,value} = e.target
    if(name!=="active"){
      setErrorMessage((old)=>{
        return{
          ...old,
          [name]:formValidator(e)
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
      let item = allData.find((x)=>x.name?.toLowerCase()===data.name.toLowerCase() && x.id!==id)
      if(item){
        setShow(true)
          setErrorMessage((old)=>{
            return{
              ...old,
              'name':"MainCategory Name is Already Exist"
            }
          })
      }
      else{
        dispatch(updateMaincategory({...data, id:id}))
          navigate("/admin/maincategory")
      }
      
    }
  }
  useEffect(()=>{
    (()=>{
      dispatch(getMaincategory())
    if(MaincategoryStateData.length)
      setAllData(MaincategoryStateData)
    else
    setAllData([])
    })()
  },[MaincategoryStateData.length])

  useEffect(() => {
    if (MaincategoryStateData.length && id) {
      const existingItem = MaincategoryStateData.find(item => item.id == id);
      if (existingItem) {
        setData({
          name: existingItem.name,
          active: existingItem.active
        });
      }
    }
  }, [MaincategoryStateData, id]);

  return (
    <>
      {/* <Breadcrum title="Admin"/>  */}
      <div className="container-fluid my-3">
        <div className="row">
            <div className="col-xl-2 col-md-3">
                <Sidebar/>
            </div>
            <div className="col-xl-10  col-md-9">
            <h5 className='bg-primary text-center p-2 text-light'><Link to="/admin/maincategory/create"><i className='fa fa-arrow-left text-light float-end'></i></Link>Maincategory</h5>
            <form onSubmit={postData}>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label>Name*</label>
                  <input type="text" name="name" value={data.name} onChange={getInputData} placeholder='Maincategory Name' className={`form-control ${show && errorMessage.name? "border-danger":"border-primary"} border-2`} />
                  {show && errorMessage.name? <p className='text-danger text-capitalize'>{errorMessage.name}</p>:""}
                </div>
                <div className='col-md-6 mb-3'>
                  <label>Active</label>
                  <select name="active" value={data.active?"1":"0"} onChange={getInputData}  className={`form-control ${show && errorMessage.active? "border-danger":"border-primary"} border-2`}>
                    <option value="1">Yes</option>
                    <option value="0">No</option>
                  </select>
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
  )
}
