// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';

// const Form = ()  => {

//   const url = "https://portfolio-projects-restapi.herokuapp.com/posts";

//   const [name, setName] = useState('');
//   const [quote, setQuote] = useState('');
//   const [desc, setDesc] = useState('');
//   const [others, setOthers] = useState('');
//   const [posts, setPosts] = useState([]);
  

//     const handleSubmit = (e) => {
//       e.preventDefault()
//       // create posts object
//       if(name && quote && desc && others) {
//         const post = { name, desc, quote, others};
//        console.log(post)
//        setPosts((posts)=> {
//         return [...posts,post]
//        });
//        setName('');
//        setQuote('');
//        setDesc('');
//        setOthers('');
//       }  
//       else {
//         console.log('empty')
//       }
//     }

//     return (
//         <>
//         <nav className="navbar navbar-expand-sm navbar-dark bg-dark ">
//        <div className="container-fluid">
//        <Link className="navbar-brand" to="/">Form-UI Project</Link>
//        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//          <span className="navbar-toggler-icon"></span>
//        </button>
//        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
//          <ul className="nav nav-pills nav-justified">
//            <li className="nav-item">
//            <Link to="/" className="nav-link">Home</Link>
//            </li>
//            <li className="nav-item">
//            <Link to="/form" className="nav-link active" aria-current="page">Form</Link>
//            </li>
//          </ul>
//        </div>
//      </div>
//    </nav>

//         <div className="container mt-5 text-center">     
//         <div className="row">

//           <form onSubmit={handleSubmit}>
//           <div className="card p-4  bg-light">
//           <h4 className="text-success">Submit Details Here</h4>
//           <div className="col-md-6 m-auto">
//       <div className="mb-3">
//   <label htmlFor="name" className="form-label">Name</label>
//   <input type="text" 
//   className="form-control" 
//   id="name"  
//   name="name" 
//   value={name} 
//   onChange={(e)=> setName(e.target.value)} required/>
// </div>

// <div className="mb-3">
//   <label htmlFor="desc" className="form-label">Description</label>
//   <input type="text" 
//   className="form-control"
//    id="desc" 
//    name="desc"
//     value={desc} 
//     onChange={(e)=> setDesc(e.target.value)} required/>
// </div>

// <div className="mb-3">
//   <label htmlFor="quote" className="form-label">Quote</label>
//   <input type="text" 
//   className="form-control"
//    id="quote"
//     name="quote"
//      value={quote} 
//      onChange={(e)=> setQuote(e.target.value)} required/>
// </div>

// <div className="mb-3">
//   <label htmlFor="info" className="form-label">Other Info</label>
//   <input type="text" 
//   className="form-control"
//    id="info" 
//    name="info"
//     value={others}
//      onChange={(e) => setOthers(e.target.value)} required/>
// </div>
// </div>
// <button className="btn btn-outline-success">SUBMIT</button>
// </div>
// </form>
//         </div>
//         </div>
//            </>
//     )
// }

// export default Form;