import React from 'react';

import imgConfirm from '../../assets/icon-complete.svg';

export default function ConfirmForm() {
    return (
        <div className="confirm-form">
            <img src={imgConfirm} alt="Icon for complete form" />
            <h1>Thank you!</h1>
            <p>We've added your card details</p>
            <button>Continue</button>
        </div>
    );
}