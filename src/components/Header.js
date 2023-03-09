import React, { Component } from 'react'

import headerImg from '../img/header.jpg'

import './header.scss'

export default class Header  extends Component {
  render() {
    return (
      <div className='header-wrapper'>
        <h1>Some Information to Welcome</h1>
        <img src={headerImg} alt="trip"></img>
      </div>
    )
  }
}
