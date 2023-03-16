 import React, { Component } from 'react'

 import faceLogo from '../img/faceLogo.png'
 import tripLogo from '../img/trip.jpg'
 import instagramLogo from '../img/instagramLogo.jpg'

 import './contact.scss'
 
 export default class Contact extends Component {
   render() {
     return (
       <div className='contact-wrapper' id='contact'>

        <h1>We are on </h1>
            <div className='contact-link'>
                
                    <a  href='https://www.auschwitzsaltmine.com'><img src={faceLogo} alt='facebook'></img></a>
                    <a href='https://www.auschwitzsaltmine.com'><img src={tripLogo} alt='tripadvisor'></img></a>
                    <a href='https://www.auschwitzsaltmine.com'><img src={instagramLogo} alt='instagram'></img></a>
                    
                   
            </div>

            <div className='contact-message'>
              <h1>Have a question :</h1>
              <input type='text' placeholder='name'></input>
              <input type='email'placeholder='email'></input>
              <input type='checkbox' placeholder='choose trip' value='Zakopane' name='Zakopane' id=''></input><label for='Zakopane'>Zakopane</label>
              <input type='date' placeholder='choose date'></input>
              <textarea type='text' placeholder='send message'></textarea>
              <button>Send</button>

            </div>

       </div>
     )
   }
 }
 