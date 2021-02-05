import React from 'react';
import { NavLink } from 'react-router-dom';
const Error =()=>{
    return(
        <h1>
            404 Page not found
          <br/>
           <NavLink to='/' >Go back</NavLink>
        </h1>
    )
}

export default Error;
