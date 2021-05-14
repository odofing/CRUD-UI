import React, { useState } from 'react';
import axios from 'axios';
import FileBase from 'react-file-base64';


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
        
       axios.put(`https://school-project-api.herokuapp.com/${_id}`,  {
          name: data.name.value,
          desc: data.desc.value,
          quote: data.quote.value,
          others: data.others.value,
          
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
          <label htmlFor="age" className="form-label">Age</label>
  <input type="number" 
  className="form-control"
   id="age" 
   name="age"
    value={data.age} 
    onChange={(e)=>handle(e)}/>
          </div>

          <div className="form-group">
          <label htmlFor="Image" className="form-label">Image</label>
<FileBase
   type="file" 
   multiple={false}
  onDone={({base64}) => setData({ ...data, selectedFile: base64})}
  />
          </div>

          <div className="form-group">
          <label htmlFor="country" className="form-label">Country</label>
  <input type="text" 
  className="form-control"
   id="country" 
   name="country"
    value={data.country}
     onChange={(e) => handle(e)}/>
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
    </div>
  </div>
</div>
{/* <Updateform /> */}
        </>
    )
}

export default Modal
