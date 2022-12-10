import React from 'react'
import { BsThreeDots } from "@react-icons/all-files/bs/BsThreeDots";
import { BsHeart } from "@react-icons/all-files/bs/BsHeart";
import { FaRocket } from "@react-icons/all-files/fa/FaRocket";
import './card.css';

function Card({data}) {
    console.log(data);
    // console.log("hi")
  return (
    <>
   {data.map((onecard,i) =>{
    // console.log(onecard.PostImage);
    return(
        <>
        <div className='single-card' >
        <header>
            <section className='cardheader-left'>
                <p id="name"><b>{onecard.name}</b></p>
                <p id="location">{onecard.location}</p>
            </section>
            <section className='cardheader-right'>
                     <BsThreeDots/>
            </section>
        </header>
        <section className='middleofcard'>
        <img id='images' src={onecard.PostImage} alt="images" className="card-media" />
        </section>
        <footer>
            <section className='cardheader-left'>
                <p id="heart" ><BsHeart/> <span><FaRocket/></span> </p>
                <p id="likes">{onecard.likes} likes</p>
               
        <h4 style={{margin:"5px"}}>{onecard.description}</h4>
       
            </section>
            <section className='cardheader-right'>
            <p>{onecard.date}</p>
            </section> 
            
        </footer>
        
    </div>
        </>
    )
   })}
        

    </>
  )
}

export default Card