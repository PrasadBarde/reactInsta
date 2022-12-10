import React, { useEffect, useState } from 'react';
import { FaCamera,FaInstagramSquare} from 'react-icons/fa';
// import {useNavigate} from 'react-router-dom'

import Card from "./card"
function Postview() {
    let [data,setData] = useState([]);
  // const navigate = useNavigate()

//    Create out useEffect function
  useEffect(() => {
    fetch("http://localhost:3004/user")
    .then((response) => (
         response.json()))
        
    .then((datas) => {
        // console.log(datas);
        setData(datas);
    })
  },[])
//   console.log(data);
  return (
    <>
    {/* <button id="landing" onClick={() => {navigate(-1)}}>Back to Landing Page</button> */}
     <h2>Instagram Postview Page</h2>
  <div className='container'>
    <header>
        <section style={{display:'inline-block'}}><FaInstagramSquare/><b style={{color:"Green" }}>Instaclone</b></section>
        <section id='camera'><FaCamera /></section>
        </header>
        <hr />
        <div id="cards">
        <Card data={data}/>
        </div>
       
  </div>
    </>
  
  );
}
export default Postview