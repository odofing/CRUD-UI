import React, { useState } from 'react';
import Navbar from './Navbar/Form-Navbar';
import axios from 'axios';

const Form = ()  => {

  const url = "https://portfolio-projects-restapi.herokuapp.com/posts";

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

  const submit = e => {
    e.preventDefault();
    axios.post(url, {
        name: data.name,
        desc: data.desc,
        quote: data.quote,
        others: data.others
    })
    .then(res => { console.log(res.data)});
    setData({name: '', others: '', desc: '', quote: ''}) 
  }

    return (
        <>      
        <Navbar />
        <div className="container mt-5 text-center">     
        <div className="row">

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
  onChange={(e)=> handle(e)} required/>
</div>

<div className="mb-3">
  <label htmlFor="desc" className="form-label">Description</label>
  <input type="text" 
  className="form-control"
   id="desc" 
   name="desc"
    value={data.desc} 
    onChange={(e)=>handle(e)} required/>
</div>

<div className="mb-3">
  <label htmlFor="quote" className="form-label">Quote</label>
  <input type="text" 
  className="form-control"
   id="quote"
    name="quote"
     value={data.quote} 
     onChange={(e)=> handle(e)} required/>
</div>

<div className="mb-3">
  <label htmlFor="others" className="form-label">Other Info</label>
  <input type="text" 
  className="form-control"
   id="others" 
   name="others"
    value={data.others}
     onChange={(e) => handle(e)} required/>
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