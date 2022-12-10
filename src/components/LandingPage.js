import React from 'react'
import "./LandingPage.css"
import {useNavigate} from 'react-router-dom'
function LandingPage() {
    const navigate = useNavigate();
  return (
    <>
    <h1>Landing Page</h1>
<div id='container'>
<div id='imagecontainers'>
<img src="images/chips.jpg" alt="right" id='image'/>
    </div>
    <div id='right-contain'>
    <h2 >10x Team 04</h2>
    <button id="button"  onClick={() => navigate('postview',{replace:true})}>Enter</button>
    </div>
</div>
    
    
    
    </>
  )
}

export default LandingPage