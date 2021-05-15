import React, {useState, createContext, useEffect} from 'react'
import { Link } from 'react-router-dom';

const url = "https://school-project-api.herokuapp.com";

export const GlobalContext = createContext();

  export const RegProvider = (props) => {

    const [users, setUsers ] = useState([])
    const [loading, setLoading] = useState(true);
 

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
    

    return (
        <GlobalContext.Provider value={[users, setUsers]}>
            {/* {console.log(users)} */}
            {props.children}
        </GlobalContext.Provider>
    )
}
