import React, { Component } from 'react'

export default class News extends Component {
  render() {
    return (
      <div className='news-wrapper'>
        <div className='news-info'>
            <h1>Title</h1>
                <p>Information</p>
                <a>Link</a>
        </div>
      </div>
    )
  }
}
