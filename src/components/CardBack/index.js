import React from 'react';

import imgCard from '../../assets/bg-card-back.png';

export default function CardBack() {
    return (
        <div className='card-back'>
            <img id="card-back-img" src={imgCard} alt='Image card back' />
            <span id="info-card-cvc">000</span>
        </div>
    )
}