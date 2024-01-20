import React from 'react'

import logo from '../assets/icons/logoч.svg';
import decimalIcon from '../assets/icons/image 1.svg';
import connectIcon from '../assets/icons/solar_wallet-money-linear.svg';

import mainIcon from '../assets/icons/nav_icons/basil_document-solid.svg';
import questionIcon from '../assets/icons/nav_icons/mdi_question-box-multiple.svg';
import documentIcon from '../assets/icons/nav_icons/ic_round-question-answer.svg';
import faqIcon from '../assets/icons/nav_icons/ph_arrows-clockwise-fill.svg';
import messageIcon from '../assets/icons/nav_icons/dashicons_admin-site-alt3.svg';

import Langoptions from './langoptions';

function header() {
  return (
    <div>
         <header className="App-header">
    
        <nav className="header_menu">
          <a href='$'>  <img src={logo} className='header_logo' alt='logo'/>  
          <img src={messageIcon} id='navIcons' alt='message'/>
          </a>
          <ul className='header_menu_list'>
            <li><a href="./App.tsx"><img src={mainIcon} id='navIcons' alt='main'/>Главная</a></li>
            <li><a href="./"><img src={faqIcon} id='navIcons' alt='faq'/>Лендинг</a></li>
            <li><a href="./"><img src={documentIcon} id='navIcons' alt='document'/>FAQ</a></li>
            <li><a href="./"><img src={questionIcon} id='navIcons' alt='question'/>Обратная связь</a></li>
          </ul>
        </nav>
                        
        <div className='header_label'>
                   <Langoptions/>
                   <a  href='./' className='decimal'>
                        <img id='labelImg' src={decimalIcon} alt='decimal'/>
                        Decimal
                   </a>
                   <a href='./' className='connect'>
                        <img id='labelImg' src={connectIcon} alt='connect'/>
                        Connect wallet
                   </a>
        </div>

      </header>
    </div>
  )
}

export default header