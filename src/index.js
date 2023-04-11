import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/index';
import GlobalStyle from './components/Theme/global';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <>
        <GlobalStyle />
        <App />
    </>
);