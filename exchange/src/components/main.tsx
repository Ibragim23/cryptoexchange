import React from 'react'

import CRYG from '../assets/icons/CRYG.svg';

function main() {
  return (
    <main className='App-main'>
         <div className='main_content'>
            <div className="main_tabs">
                <a href='/' id='swap'>Swap</a>
                <a href='/' id='pools'>Pools</a>
            </div>
            <div className='buy&sell'>
                <div className='sell'>
                    <p>Вы продаете</p>
                    <div className='sell_choose'>
                    <div className="dropdown">  
                        <button type="button" className="dropdown-toggle" data-toggle="dropdown">  
                        </button>  
                    <div className="dropdown-menu">  
                    <a className="dropdown-item" href="1"> <img src={CRYG} alt='CRYG'/></a>  
            </div>  
                    </div> 
                    <span>1</span>    
                    </div>
                    <div className='sell_count'>
                        <span>CRYG</span>
                        <span>-$333.73</span>
                    </div>
                </div>
            </div>
         </div>
    </main>
  )
}

export default main