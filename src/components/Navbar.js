import React, { Component } from 'react'
import MenuItem, { ItemMenu } from './MenuItem'
import './navbar.scss'

export default class Navbar extends Component {

  state = {
     cliked : false ,
     
  }
  render() {
    return (
      <nav className='nav-wrapper'>

        <div className='nav-logo'>
            <h1>Name</h1>
            <img className='nav-logo-img' src='#' alt='logo'></img>
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
