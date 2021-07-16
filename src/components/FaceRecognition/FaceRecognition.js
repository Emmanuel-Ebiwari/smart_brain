import React from 'react';
import './FaceRecognition.css'


function FaceRecognition({imageUrl,box}) {
    let borders = {
        top: box.topRow,
        bottom: box.bottomRow,
        left: box.leftCol,
        right: box.rightCol
     }
    return(
            <div className='center ma'>
                <div className='absolute mt2'>
                    <img id='inputimage' src={imageUrl} alt='' width='500px' height='auto' />
                    <div className='bounding-box' style={borders}></div>
                </div>
            </div>
        )
        // https://www.uni-regensburg.de/Fakultaeten/phil_Fak_II/Psychologie/Psy_II/beautycheck/english/prototypen/w_sexy_gr.jpg
}

export default FaceRecognition