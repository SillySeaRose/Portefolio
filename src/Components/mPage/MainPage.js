import React from 'react';
import { NavLink } from 'react-router-dom';
import "./MainPage.css"

const mainPage = () => {
  return (
    <>  
        <div id='WebLimitBorder'>
            <h1 className='NameTitle'>Adriano Moreira</h1>
            <h2 className='SubNameTitle'>Game Designer and Web Developer</h2>

            <NavLink className="menuLink" to="/about">About</NavLink>
        </div>
    </>
  )
}

export default mainPage