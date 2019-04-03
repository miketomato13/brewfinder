import React from 'react'
import { Link } from 'react-router-dom'
import '../pages/Home.css'

const NavBar = () => {
  return(
      <div  className='navbar'>
      <img src={require('../Media/beer2.png')} alt='' id="imageTitle"/>
        <div className='font'>

            <div className='nav1'>
              <Link  to="/">home</Link>
            </div>
            <div className='nav2'>
              <Link  to="../pages/SearchBrewery">find brewery</Link>
           </div>

        </div>
        <div id="image-beer">
        <img src={require('../Media/coollogo_com-11970664.png')} alt= '' id="imageLogo"/>
        </div>
      </div>

  )
}

export default NavBar
