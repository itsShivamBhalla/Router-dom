import React from 'react';

const Sresult =(props)=>{
    const img = `https://source.unsplash.com/200x150/?${props.name}`
    return <>
    <img src={img} alt="search-result"/>
    </>

}
export default Sresult;