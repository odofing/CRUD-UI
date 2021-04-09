import React, { useState } from 'react';
import axios from 'axios';

const Modal = ({ _id, users })  => {


    const [data, setData] = useState({
        name: '',
        desc: '',
        quote: '',
        others: ''
    })

    const handle = e => { 
      const newData = {...data};
    newData[e.target.id] = e.target.value;
    setData(newData);       
    console.log(newData)  
  }
 
      const handleUpdate = _id => {
        axios.put(`https://portfolio-projects-restapi.herokuapp.com/posts/${_id}`, {
          name: data.name,
          desc: data.desc,
          quote: data.quote,
          others: data.others
      })
        .then(res => { console.log(res.data)})
        const newUser = users.find((user) => user._id === _id);
         return [...users, newUser]
    
      }


    return (
        <>

<button type="button" className="btn btn-warning btn-block" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@getbootstrap"onClick={() => handleUpdate(_id)} >Update data</button>

<div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header text-center">
        <h5 className="modal-title" id="exampleModalLabel">Update Data</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        <form>
          <div className="form-group">
          <label htmlFor="name" className="form-label">Name</label>
    <input type="text" 
    className="form-control" 
    id="name"  
    name="name" 
    value={data.name} 
    onChange={(e)=> handle(e)}/>
          </div>

          <div className="form-group">
           <label htmlFor="desc" className="form-label">Description</label>
    <input type="text" 
    className="form-control"
     id="desc" 
     name="desc"
      value={data.desc} 
      onChange={(e)=>handle(e)}/>
          </div>

          <div className="form-group">
          <label htmlFor="quote" className="form-label">Quote</label>
    <input type="text" 
    className="form-control"
     id="quote"
      name="quote"
       value={data.quote} 
       onChange={(e)=> handle(e)}/>
          </div>

          <div className="form-group">
          <label htmlFor="others" className="form-label">Other Info</label>
    <input type="text" 
    className="form-control"
     id="others" 
     name="others"
      value={data.others}
       onChange={(e) => handle(e)}/>
          </div>
        <button type="button" className="btn btn-primary" onClick={() => handleUpdate(_id)}>Send message</button>
        </form>
      </div>
      <div className="modal-footer">
       
      </div>
    </div>
  </div>
</div>
{/* <Updateform /> */}
        </>
    )
}

export default Modal
