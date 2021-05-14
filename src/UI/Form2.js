import React, { useState } from 'react';
import Navbar from './Navbar/Form-Navbar';
import FileBase from 'react-file-base64';
import axios from 'axios';
import Alert from './Alert';

const Form = ()  => {

  const [alert, setAlert] = useState({show: false, message: '', type: ''})

  const url = "https://school-project-api.herokuapp.com";

  const [data, setData] = useState({
      name: '',
      age: '',
      selectedFile: '',
      country: ''
  })

  const handle = e => { 
    const newData = {...data};
  newData[e.target.id] = e.target.value;
  setData(newData);       
  console.log(newData)  
}

  const submit = e => {
    e.preventDefault();
    // display alert
    
    if (data.name === "" ) {
    showAlert(true, 'danger', 'Please Enter Some Values!')
    } else if (data.age === "") {
      showAlert(true, 'danger', 'Please Enter Some Values!')
    // } else if (data.SelectedFile === "") {
    //   showAlert(true, 'danger', 'Please Attach An Image')
    } else if (data.country === "") {
      showAlert(true, 'danger', 'Please Enter Some Values!')
    } else {
    axios.post(url, {
        name: data.name,
        age: data.age,
      selectedFile: data.selectedFile,
        country: data.country
    })
    .then(res => { console.log(res.data)});
    setData({name: '', country: '', age: '', selectedFile: ''}) 
    showAlert(true, 'success', 'Submitted Successfully!')
  }}

    // set up alert function
  const showAlert = (show=false, type="", message="") => {
    setAlert({show,type,message})
  }

    return (
        <>      
        <Navbar />

        <div className="container mt-5 text-center">     
        <div className="row">
{alert.show && <Alert {...alert} removeAlert={showAlert}/>}

          <form onSubmit={(e) => submit(e)}>
          <div className="card p-4  bg-light">
          <h4 className="text-success">Submit Details Here</h4>
          <div className="col-md-6 m-auto">
      <div className="mb-3">
  <label htmlFor="name" className="form-label">Name</label>
  <input type="text" 
  className="form-control" 
  id="name"  
  name="name" 
  value={data.name} 
  onChange={(e)=> handle(e)}/>
</div>

<div className="mb-3">
  <label htmlFor="age" className="form-label">Age</label>
  <input type="number" 
  className="form-control"
   id="age" 
   name="age"
    value={data.age} 
    onChange={(e)=>handle(e)}/>
</div>

<div className="mb-3">
  <label htmlFor="Image" className="form-label">Image</label>
<FileBase
   type="file" 
   multiple={false}
  onDone={({base64}) => setData({ ...data, selectedFile: base64})}
  />
</div>

<div className="mb-3">
  <label htmlFor="country" className="form-label">Country</label>
  <input type="text" 
  className="form-control"
   id="country" 
   name="country"
    value={data.country}
     onChange={(e) => handle(e)}/>
</div>
</div>
<button className="btn btn-outline-danger">SUBMIT</button>
</div>
</form>
        </div>
        </div>
           </>
    )
}

export default Form;