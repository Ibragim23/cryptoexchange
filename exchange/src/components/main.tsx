

import CRYG from '../assets/icons/CRYG.svg';
import DEL from '../assets/icons/del.svg';
import arrow from '../assets/icons/back.svg';
import arrowDown from '../assets/icons/down_arrow.svg';
import infoIcon from '../assets/icons/codicon_info.svg';
import walleyBtn from '../assets/icons/solar_wallet-money-linear.svg';

function main() {



  return (
    <main className='App-main'>
       <div className="main_content">
           <div className="menu-tabs">
             <a href='$' id='swap' >Swap</a>
             <a href='$' id='pools'>Pools</a>
           </div>
           <div className="cards">
                <div className="sell">
                    <p>Вы продаете</p>
                <div className='coins'>
                  <div className="dropdown-menu_coins">
                    <button className="menu-button">
                      <img src={CRYG} alt="CRYG"/>CRYG<img id='arrow' src={arrow} alt='arrow'/>
                    </button> 
                    <nav className="menu">
                        <ul className="menu_list">
                            <li className="menu_item">CRYG</li>
                            <li className="menu_item">CRYG</li>
                        </ul>
                    </nav>
                    <span>1</span>
                    </div>
                  <div className='coin_count'>
                      <p>CRYG</p>
                      <span>-$333.73</span>
                    </div>
                  </div>
                </div>
                <button>
                      <img src={arrowDown} id='arrowDown' alt='arrowDown'/>
                </button>
                <div className="buy">
                <p>Вы покупаете</p>
                <div className='coins'>
                  <div className="dropdown-menu_coins">
                    <button className="menu-button">
                      <img src={DEL} alt="CRYG"/>DEL<img id='arrow' src={arrow} alt='arrow'/>
                    </button> 
                    <nav className="menu">
                        <ul className="menu_list">
                            <li className="menu_item">CRYG</li>
                            <li className="menu_item">CRYG</li>
                        </ul>
                    </nav>
                    <span>714.543016</span>
                    </div>
                  <div className='coin_count'>
                      <p>DEL</p>
                      <span>~$331.62 (-0.63%)</span>
                    </div>
                  </div>
                </div>
           </div>
           <div className="currently_cours">
            <p><img src={infoIcon} id='infoIcon' alt='info'/>1 CRYG = 714.543 DEL <span id='current_info'>($331.42)</span></p>
           </div>
           <div className='btn-walley'>
            <button type='button' formAction='#' id='btn-connect_walley'>
            <img src={walleyBtn} alt='walley' id='walleyImg'/>Сonnect walley
            </button>
           </div>
       </div>
    </main>
  )
}

export default main