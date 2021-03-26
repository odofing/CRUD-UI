import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import HomeNavbar from './Navbar/Home-Navbar';

const url = "https://portfolio-projects-restapi.herokuapp.com/posts";

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
      
        // CONFIRM DELETE
      // const confirmDelete = () => {

      // }

      // update form 
      // const handleUpdate = (_id) => {
      //   const update = users.filter(user => {
      //     let updateItem = user._id
      //     console.log(updateItem)
      //   })
      //   console.log('clicked')
          
      // }


      const handleDelete = _id => {
        axios.delete(`https://portfolio-projects-restapi.herokuapp.com/posts/${_id}`)
        .then(res => { console.log(res.data)})
        const removeItem = users.filter((user) => user._id !== _id)
       setUsers(removeItem);
        console.log(removeItem)
      }

    return (
        <>
      <HomeNavbar />
        <section>
            <div className="row" >
              
                    {users.map(user => {
                       // console.log(user)
                        const {_id, desc, name, quote, others} = user;
                        return (
                            <React.Fragment key={_id}>
                            <div  className="col-md-6 mt-5 text-center" >
                              <div className="card border-primary mb-3" >
                            <div className="card-body">
                            <h5 className="card-title">{name}</h5>
                            <div className="card p-3">
                              <p className="card-text">{desc}</p>
                                <p className="card-text">{quote}</p>
                                <p className="card-text">{others}</p>
                          <Link to="/" className="btn btn-warning m-3">Update</Link>
                             <Link to="/" className="btn btn-danger m-3" onClick={() => handleDelete(_id)} >Delete</Link>
    
                             </div>
                         </div>
                         </div>
                        </div>
                        </React.Fragment>                     
                        )
                    })
                    
                    }
                    </div>
        </section>
        </>
    )
}
export default Homepage; 
     