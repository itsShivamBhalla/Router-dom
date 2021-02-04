import React from 'react';
import {Route,Switch} from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Error from './Error';
import Navbar from './Navbar';
import Service from './Service';
import Home from './Home';
import User from './User';


const App =()=>
{

    const Name =()=>
    {
        return <h1>This is name page</h1>
    }

return( 
    <>
    <Navbar/>
    <Switch>
       <Route exact path='/' component={Home}/>  
       <Route exact path='/about' render={()=>
          <About  name='Aboutt' />
       }/>  
       <Route exact path='/contact' render={()=>
          <Contact  name='Contactt' />
       }/>  
       <Route exact path='/service' component={Service}/>  
       <Route path='/contact/name' component={Name}/> 
       <Route exact path='/user/:fname/:lname' component={User}/> 
       <Route component={Error}/>
    </Switch>

    </>
    )
}

export default App;
// if we want to only pass call component then component attribute is prefered but in case if you want to pass props to it's component then render attribute is prefered. Although there isn't any difference bw the performance 