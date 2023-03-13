 import React, { Component } from 'react'

 import faceLogo from '../img/faceLogo.png'
 import tripLogo from '../img/trip.jpg'
 import instagramLogo from '../img/instagramLogo.jpg'
 
 export default class Contact extends Component {
   render() {
     return (
       <div className='contact-wrapper'>
            <div className='contact-link'>
                <h1 id='contact'>We are on </h1>
                    <a href='#'><img src={faceLogo} alt='facebook'></img></a>
                    <a href='#'><img src={tripLogo} alt='tripadvisor'></img></a>
                    <a href='#'><img src={instagramLogo} alt='instagram'></img></a>
                    
                    <h2>TripAdvisor</h2>
                    <h2>Instagram</h2>
            </div>

            <div className='contact-message'>
              <input placeholder='name'></input>
              <input placeholder='choose trip'></input>
              <input placeholder='choose date'></input>
              <textarea placeholder='send message'></textarea>
              <button>Send</button>

            </div>

       </div>
     )
   }
 }
 