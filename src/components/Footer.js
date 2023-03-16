import React, { Component } from 'react'

import './footer.scss'

export default class Footer extends Component {
  render() {
    return (
      <div>
            <div className='footer-wrapper'>
                <h1>Site Map</h1>
                <ul>
                    <li>Main</li>
                    <li>About</li>
                    <li>Trips</li>
                    <li>Info</li>
                    <li>Contact</li>
                </ul>
            </div>
      </div>
    )
  }
}
