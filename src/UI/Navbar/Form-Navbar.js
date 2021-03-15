import React from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div>
             <nav className="navbar navbar-expand-sm navbar-dark bg-dark ">
       <div className="container-fluid">
       <Link className="navbar-brand" to="/">Form-UI Project</Link>
       <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
         <span className="navbar-toggler-icon"></span>
       </button>
       <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
         <ul className="nav nav-pills nav-justified">
         <li className="nav-item">
           <Link to="/form" className="nav-link active" aria-current="page">Form</Link>
           </li>
           <li className="nav-item">
           <Link to="/" className="nav-link">Home</Link>
           </li>
         </ul>
       </div>
     </div>
   </nav>
        </div>
    )
}

export default Navbar
