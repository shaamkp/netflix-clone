import React from 'react'
import netflix_logo from '../../assets/logo.png'

export default function Nav() {
    return (
      <div className="Nav">
        <img src={netflix_logo} alt="Image" className="navLogo" />
      </div>
    );
}
