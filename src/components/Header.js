import React, { Component } from 'react'

import headerImg from '../img/header.jpg'

import './header.scss'

export default class Header  extends Component {
  render() {
    return (
      <div className='header-wrapper'>
        <h1>Your Trip Start Now</h1>
        {/* <img src={headerImg} alt="trip"></img> */}
        <p>See and relax with our driver and trip...</p>
        <button className='header-btn'> Trip and Relax</button>
      </div>
    )
  }
}
