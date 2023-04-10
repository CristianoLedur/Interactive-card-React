import React, { useState } from 'react';

import CardFront from '../CardFront/index';
import CardBack from '../CardBack/index';
import Form from '../Form/index';
import ConfirmForm from '../ConfirmForm/index.js';

export default function App() {
    const [ status, setStatus ] = useState(false);

    function handleToggleStatus() {
        setStatus(prevState => prevState === false ? true : false );
    }
    
    return (
        <> 
            <section className="cards">
                <CardFront />
                <CardBack />
            </section>
            <section className="form-box">
                { !status 
                ? <Form 
                    className="form" 
                    onToggleTheme={handleToggleStatus}
                /> 
                : < ConfirmForm className="confirm-form"/> 
                }
            </section>
            
        </>
    );
}