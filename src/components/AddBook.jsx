import React, { useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const AddBook = () => {
    const [data, setData] = useState(
        {
        "title": "",
            "aut": "",
                "yr": "",
                    "pri": ""
    }
)
const inputHandler = (event) => {
    setData({ ...data, [event.target.name]: event.target.value })
}
const readValue = () => {
    axios.post("http://localhost:8080/",data).then((response)=>{
        console.log(response.data)
        if(response.data.status=="Success"){
            alert("Added Successfully")
        }
        else{
            alert(response.data)
        }
      }).catch(
        (error)=>{
            alert("Error")
        }
      )
      console.log(data)
}
return (
    <div>
        <Navbar />

        <div className="container mt-5">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">


                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">Title</label>
                            <input type="text" className="form-control" name='title' value={data.title} onChange={inputHandler} />

                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">Author Name</label>
                            <input type="text" className="form-control" name='aut' value={data.aut} onChange={inputHandler} />

                        </div>
                        {/* <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

            <label htmlFor="" className="form-label">Category</label>
            <select name="" id="" className='form-control'>
                <option value="">Fiction</option>
                <option value="">Novel</option>
                <option value="">Fantasy</option>
                <option value="">Horror</option>
                <option value="">Action and Adventure</option>
                <option value="">Thriller</option>
            </select>

            </div> */}
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">Published Year</label>
                            <input type="date" className="form-control" name='yr' value={data.yr} onChange={inputHandler} />

                        </div>

                        {/* <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

            <label htmlFor="" className="form-label">Book Description</label>
            <textarea name="" id="" className="form-control"></textarea>

            </div>
            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

            <label htmlFor="" className="form-label">Distributor Name</label>
            <input type="text" className="form-control" />

            </div>
            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

            <label htmlFor="" className="form-label">Publisher Name</label>
            <input type="text" className="form-control" />

            </div> */}
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">Price</label>
                            <input type="text" className="form-control" name='pri' value={data.pri} onChange={inputHandler} />

                        </div>
                        {/* <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

            <label htmlFor="" className="form-label">Edition</label>
            <input type="text" className="form-control" />

            </div> */}
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <button className="btn btn-success" onClick={readValue}>SUBMIT</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>








    </div>
)
}

export default AddBook