import React, { useState } from 'react';
import Sresult from './Sresult';

const Search =()=>{
    const [img , setImg] = useState("");

    return (
        <>
        <div className="searchbar">
        <input type="text" placeholder="search" value={img} onChange={(event)=>{
            setImg(event.target.value);
        }}/>
        <br/>
        {img===""? null :<Sresult name={img}/> }
        
        </div>
        
        </>
    )
}

export default Search;