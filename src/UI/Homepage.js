import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalContext';
import axios from 'axios';
import Modal from './UpdateModal';
import HomeNavbar from './Navbar/Home-Navbar';


const Homepage = () => {
   const [users, setUsers] = useContext(GlobalContext);

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
     