import React, { Component } from 'react'

import MenuItem, { ItemMenu } from './MenuItem'
import logo from '../img/logo.png'

import './navbar.scss'

export default class Navbar extends Component {

  state = {
     cliked : false ,
     
  }
  render() {
    return (
      <nav className='nav-wrapper'>

        <div className='nav-logo'>
            <h1>Vip Tour Cracow  </h1>
            <img className='nav-logo-img' src={logo} alt='logo'></img>

            <p>we drive you relax and trip ...</p>
        </div>
        

        <div className='nav-menu'>

          <ul className='nav-menu-list'>
            {ItemMenu.map( (item,index) => {
              return <li className={item.cName} key={index}><a href={item.url}>{item.title}</a></li>
            })}

          </ul>

          

        </div>

        </nav>
    )
  }
}
