import React from 'react';
import Tilt from 'react-tilt'
import brain from './brain.png'


function Logo() {
    return(
            <div className='ma4 mt0'>
                <Tilt className="Tilt br2 shadow-2" 
                options={{ max : 55 , perspective: 980}} 
                style={{ height: 120, width: 120,background: 'linear-gradient(45deg,#1e2594 ,rgb(253, 106, 47))' }} >
                    <div className="Tilt-inner pa3"> 
                        <img style={{paddingTop:'4px'}} 
                        src={brain} 
                        alt='logo'
                        />
                    </div>
                </Tilt>
            </div>
        )
}

export default Logo