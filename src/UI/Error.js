import React from 'react'
import { Link } from 'react-router-dom';

const Error = () => {
  return (
   
      <div className="text-center mt-5">
        <h2>Ooops! its a dead end</h2>
        <Link to="/" className="btn btn-outline-warning ">Back to Homepage</Link>
      </div>
   
    
  )
}

export default Error;
