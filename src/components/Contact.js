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
        <p>Are you looking for an interesting place to spend a long weekend or a longer vacation? Many people decide to stay in Krakow. The opportunity to enjoy the charms of the city's vibrant cultural and tourist life combined with the close proximity of many interesting natural attractions make your stay in Krakow a must! What tourist attractions await us in Krakow and Poland? Auschwitz - This place became a symbol of the Holocaust and Nazi crimes against Poles, Roma and Jews. It takes about 3 hours to explore. Strong nerves are also needed to see what atrocities took place in Auschwitz. Wieliczka- The reason why it is worth visiting the Wieliczka Mine is best evidenced by the fact that it was one of the first UNESCO World Cultural and Natural Heritage listed. This place combines centuries-old Polish culture as well as modernity in one. During the journey through the amazing mine rooms we will have the opportunity to discover the history, as well as see many amazing rooms and tunnels and chambers adapted for tourists. </p>
        
            <div className='contact-link'>
                
                    <a  href='https://www.auschwitzsaltmine.com'><img src={faceLogo} alt='facebook'></img></a>
                    <a href='https://www.auschwitzsaltmine.com'><img src={tripLogo} alt='tripadvisor'></img></a>
                    <a href='https://www.auschwitzsaltmine.com'><img src={instagramLogo} alt='instagram'></img></a>
                    
                   
            </div>

            <div className='contact-message'>
              <h1>Have a question :</h1>
              <input type='text' placeholder='name'></input>
              <input type='email'placeholder='email'></input>
              <input type='checkbox' placeholder='choose trip' value='Zakopane' name='Zakopane' id='inp'></input><label htmlFor='Zakopane'>Zakopane</label>
              <input type='checkbox' placeholder='choose trip' value='Czestochowa' name='Zakopane' id='inp'></input><label htmlFor='Zakopane'>Czestochowa</label>
              <input type='checkbox' placeholder='choose trip' value='Auschwitz' name='Zakopane' id='inp'></input><label htmlFor='Zakopane'>Auschwitz</label>
              <input type='date' placeholder='choose date'></input>
              <textarea type='text' placeholder='send message'></textarea>
              <button>Send</button>

            </div>

       </div>
     )
   }
 }
 