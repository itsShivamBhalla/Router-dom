import React from 'react';
import {useParams, useLocation, useHistory } from "react-router-dom";

const User =({match})=>{
    const {fname,lname} = useParams();
    const location = useLocation();
    const history = useHistory();

    console.log(history);
    return(
        <>
       <h1>user {fname} {lname} page</h1>
        <p>My current location is {location.pathname}</p>
        {location.pathname===`/user/shivam/bhalla` ? (<button onClick={()=>{alert("awesome")}}>clickme</button>) : null}

        
        {location.pathname===`/user/shivam/bhalla` ? (<button onClick={()=>{history.goBack()}}>Let's go back</button>) : null}

        </>
    )
}

export default User;