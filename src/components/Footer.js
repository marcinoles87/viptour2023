import React, { Component } from 'react'

import './footer.scss'

export default class Footer extends Component {
  render() {
    return (
      
            <div className='footer-wrapper'>
                <h1>Site Map</h1>
                <ul className='footer-list'>
                    <li><a href='#contact'>Main</a></li>
                    <li><a href='#contact'>About</a></li>
                    <li><a href='#contact'>Trips</a></li>
                    <li><a href='#contact'>Info</a></li>
                    <li><a href='#contact'>Contact</a></li>
                </ul>
            </div>
      
    )
  }
}
