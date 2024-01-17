import React from 'react'

import logo from '../assets/icons/logoч.svg';
import decimalIcon from '../assets/icons/image 1.svg';
import connectIcon from '../assets/icons/solar_wallet-money-linear.svg';

import Langoptions from './langoptions';

function header() {
  return (
    <div>
         <header className="App-header">
    
        <nav className="header_menu">
            <img  src={logo} className='header_logo' alt='logo'/>  
          <ul className='header_menu_list'>
            <li><a href="./App.tsx">Главная</a></li>
            <li><a href="./">Лендинг</a></li>
            <li><a href="./">FAQ</a></li>
            <li><a href="./">Обратная связь</a></li>
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