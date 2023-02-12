import React,{useContext} from 'react'
import './style.css'
import {NavbarTheme} from '../contexts/ThemeContext'

const Card = () => {

    const bgColor = useContext(NavbarTheme)
    const color = bgColor.NavTheme

    const Acolor = () => {
        return color === '#FFF2F2' ? '#BFACE2' : '#FFF2F2'
    }
    console.log('color',bgColor.CardBg);

  return (
      <div className='container' >
          
          <div className="box" style={{background:color}} >
              <h2>macBook</h2>
              <small>Price : $900</small>
              <button>Add to cart</button>
          </div>

    </div>
  )
}

export default Card