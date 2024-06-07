import React from 'react'
import NavBar from './NavBar'

const DeleteBook = () => {
  return (
    <div>
        <br />
        
        <NavBar/>
        <h1><center>Delete Book</center></h1>
        <div className="container">
            <div className="row g-3">
                <div className="col col-12 col-sm-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">Book Title</label>
                    <input type="text" className="form-control" />
                </div><br />
                <div className="col col-12 col-sm-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button className="btn btn-danger">Delete</button>
                    <br />
                </div>
            </div>
        </div>
        </div>
  )
}

export default DeleteBook