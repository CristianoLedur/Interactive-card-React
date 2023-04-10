import React from 'react';

import imgCard from '../../assets/bg-card-front.png';
import imgLogo from '../../assets/card-logo.svg';

export default function CardFront() {
    return (
        <div className='card-front'>
            <img id="card-front-img" src={imgCard} alt='Image card back' />
            <div className='card-front-info'>
                <img id='info-logo' src={imgLogo} alt='Card logo'/>
                <span id="info-card-number">0000 0000 0000 0000</span>
                <span id="info-card-name">Jane Appleseed</span>
                <span id="info-exp-date">00/00</span>
            </div>
        </div>
    )
}