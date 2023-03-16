import React, { Component } from 'react'

import './news.scss'

export default class News extends Component {
  render() {
    return (
      <div className='news-wrapper'>
        <div className='news-info'>
            <h1>Before We Drive</h1>
                <p>Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w 
                  przemyśle poligraficznym. Został po raz pierwszy użyty w XV w. przez nieznanego
                   drukarza do wypełnienia tekstem próbnej książki. Pięć wieków później zaczął być 
                   używany przemyśle elektronicznym, pozostając praktycznie niezmienionym. Spopularyzował s
                   ię w latach 60. XX w. wraz z publikacją arkuszy Letrasetu, zawierających fragmenty Lorem 
                   Ipsum, a ostatnio z zawierającym różne wersje Lorem Ipsum oprogramowaniem przeznaczonym do 
                   realizacji druków na komputerach osobistych, jak Aldus PageMaker</p>
                <a href='.contact'>Link</a>
                
        </div>
      </div>
    )
  }
}
