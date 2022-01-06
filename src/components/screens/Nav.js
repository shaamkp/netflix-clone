import React, { useEffect, useState } from 'react'
import netflix_logo from '../../assets/logo.png'

export default function Nav() {
  const[show, hanleShow]=useState(false); 

  useEffect(() =>{
    window.addEventListener("scroll", () =>{
      if(window.scrollY > 100){
        hanleShow(true);
      }else hanleShow(false)
    });
    return () =>{
      window.removeEventListener("scroll");
    };
  }, []);
    return (
      <div className={`Nav ${show && 'nav_black'}`}>
        <img src={netflix_logo} alt="Image" className="navLogo" />
      </div>
    );
}
