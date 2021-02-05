import React from 'react';
import {NavLink} from 'react-router-dom';


const Navbar=()=>{
    return (
        <>
        {/*  
        instead of this we can use link but link doesnt allow us to have any class attribute to use for designing so we react router gives us another component which is NavLink which have liberty to have an activeClassName*/}


        <div className='menu_style'>
        <NavLink exact activeClassName="active_class" to='/'>Home</NavLink>
        <NavLink exact activeClassName="active_class" to='/about'>About  </NavLink>
        <br/>
        <NavLink exact activeClassName="active_class" to='/contact'>Contact  </NavLink>
        <br/>
        <NavLink exact activeClassName="active_class" to='/service'>Service </NavLink>
        <br/>
        <NavLink exact activeClassName="active_class" to='/user/shivam/bhalla'>User </NavLink>
        </div>
        
        
        {/* <br/>
        
        <br/>
        <br/>
        <br/>

        <a href="/" className="active_class">About us</a>
        <br/> 
        <a href="/contact" className="active_class">Contact us</a> */}
        </>
    )
}
export default Navbar;