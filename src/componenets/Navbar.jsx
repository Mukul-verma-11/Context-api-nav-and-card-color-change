import React,{useContext} from 'react'
import './style.css'

import {NavbarTheme} from '../contexts/ThemeContext'



const Navbar = () => {

    const NavThemeState = useContext(NavbarTheme)

    const theme = NavThemeState.NavTheme
    console.log(NavThemeState.CardBg);
    console.log(typeof NavThemeState.setCardBg);
  return (
      <div>
          

          <div className="navbar" style={{background:theme}}>
              <div className="logo"><h1>Netflix</h1></div>
              <div className="contents">
                  <li>Home</li>
                  <li>Contact</li>
                  <li>Services</li>
                  <li>Products</li>
                  <li>About</li>

                  <button onClick={() => {
                      return (
                          NavThemeState.setNavTheme(() => { return theme === '#C3ACD0'  ? '#FFF2F2'  : '#C3ACD0' })
                          
                          )
                  }} >Change Theme</button>
              </div>
          </div>

    </div>
  )
}

export default Navbar