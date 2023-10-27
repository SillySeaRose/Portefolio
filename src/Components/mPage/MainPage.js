import React from 'react';
import { NavLink } from 'react-router-dom';
import "./MainPage.css"

const mainPage = () => {
  return (
    <>  
        <div id='WebLimitBorder'>
            <h1 className='NameTitle'>Adriano Moreira</h1>
            <h2 className='SubNameTitle'>Game Designer and Web Developer</h2>

            <nav id='menu'>
              <ul id='organizer'>  
                <li><NavLink className="menuLink" to="/about">About</NavLink></li>
                <li><NavLink className="menuLink" to="/artPage">ArtPage</NavLink></li>
                <li><NavLink className="menuLink" to="/webProject">WebProject</NavLink></li>
              </ul>
            </nav>
        </div>
    </>
  )
}

export default mainPage