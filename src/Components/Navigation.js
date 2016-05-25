import React from 'react'

export default function Navigation () {
  return (
    <div className='navContainer'>
      <div className='title'>
      <h2>{'React Logo Quiz'}</h2>
      <p>{'Match the logos to their corresponding library.'}</p>
      </div>
      <ul>
        <li><a target='_blank' href='https://github.com/qualitydixon'>
          <i className='fa fa-github icon'></i></a></li>
        <li><a target='_blank' href='https://twitter.com/dixonbydesign'>
          <i className='fa fa-twitter icon'></i></a></li>
      </ul>
    </div>
  )
}
