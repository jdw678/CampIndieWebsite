import React from 'react'
import '../css/home.css';
import campfire from '../images/campfire.gif'

export default function Home() {
  return (
    <div className='home'>
        <h2>Camp Indie</h2>
        <img src={campfire} className='campfire' id='campfire'/>
    </div>
  )
}
