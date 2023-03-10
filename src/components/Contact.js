 import React, { Component } from 'react'
 
 export default class Contact extends Component {
   render() {
     return (
       <div className='contact-wrapper'>
            <div className='contact-link'>
                <h1>We are on </h1>
                    <h2>Facebook</h2>
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
 