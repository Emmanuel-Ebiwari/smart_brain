import React from 'react';
import './imageLinkForm.css'


function ImageLinkForm({ onInputChange,onSubmit }) {
    return(
            <div>
                <p className='white f3'>
                    This magic brain will detect faces in your picture, give it a try
                </p>
                <div className='center'>
                    <div className='center form pa4 br3 shadow-5'>
                         <input type='text' className='no-outline f4 pa2 w-70 center' onChange={onInputChange} />
                         <button className='no-outline w-30 grow f4 link ph3 pv2 dib white  bg-light-purple'
                         onClick={onSubmit} >Detect</button>
                    </div>
                </div>
            </div>
        )
}

export default ImageLinkForm