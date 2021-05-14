import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';
import Modal from './UpdateModal';
import HomeNavbar from './Navbar/Home-Navbar';

const url = "https://school-project-api.herokuapp.com";

const Homepage = () => {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);
  

    const getUsers = async () => {
        const resp = await fetch(url)
        const users = await resp.json();
         setUsers(users)
         setLoading()
      }
      useEffect(() => {
        
        getUsers();
       
      }, []);

      if (loading) {
        return (
          <div className="text-center mt-5">
  <div className="spinner-border" role="status">
    <span className="sr-only">Loading...</span>
  </div>
</div>
        )
      }

     // const input = []
      if (users.length === 0) {
        return ( 
          <div  className="text-center mt-5 text-capitalize text-primary">
          <h5>
            Please, Fill the form provided</h5>
            <Link to="/form" className="btn btn-primary text-center ">Form</Link>
            </div>
        )
      }
      

      const handleDelete = _id => {
        axios.delete(`https://school-project-api.herokuapp.com/${_id}`)
        .then(res => { console.log(res.data)})
        const removeItem = users.filter((user) => user._id !== _id)
       setUsers(removeItem);
      //  console.log(removeItem)
      }

    return (
        <>
      <HomeNavbar />
        <section>
            <div className="row" >
                    {users.map(user => {
                        console.log(user)
                       if (user === []) {
                       return   <p>Please enter something</p>
                       } else {
                        const {_id, name, age, country, selectedFile } = user;
                        return (
                            <React.Fragment key={_id}>
                            <div  className="col-md-6 mt-5 text-center" >
                              <div className="card border-primary mb-3" >
                            <div className="card-body">
                            <h5 className="card-title">{name}</h5>
                            <div className="card p-3">
                              <p className="card-text">{age}</p>
                              <p className="card-text">{country}</p>
                              <img src={selectedFile} alt={name} className="w-50"/>
                                <Link to="/"><Modal _id={_id} users={users}/></Link>
                             <Link to="/" className="btn btn-danger mt-3" onClick={() => handleDelete(_id)} >Delete</Link>
    
                             </div>
                         </div>
                         </div>
                        </div>
                        </React.Fragment>                     
                        )}
                    })
                    
                    }
                    </div>
        </section>
        </>
    )
}
export default Homepage; 
     