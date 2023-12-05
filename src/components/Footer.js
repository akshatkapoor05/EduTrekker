import React from 'react'
import './Footer.css'
import wapp from '../img/wapp.png'
import link from '../img/link.png'
import insta from '../img/insta.png'

const Footer = () => {
  return (
    <div className='footer__parent'>
        <div className='footer__links'>
            <img className='footer__img' src={wapp} alt=''/>
            <img className='footer__img' src={link} alt=''/>
            <img className='footer__img' src={insta} alt=''/>
        </div>
        <p>Copyright © 2023 EduTrekker. All rights reserved.</p>
    </div>
  )
}

export default Footer