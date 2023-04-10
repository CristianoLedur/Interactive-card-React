import { createGlobalStyle } from 'styled-components';

import backgroundImgMobile from '../../assets/bg-main-mobile.png';
import backgroundImgDesktop from '../../assets/bg-main-desktop.png';

export default createGlobalStyle`
	:root {
        --active-input: hsl(249, 99%, 64%), hsl(278, 94%, 30%);
        --red: hsl(0, 100%, 66%);
        --white: hsl(0, 0%, 100%);
        --light-grey: hsl(270, 3%, 87%);
        --dark-grey: hsl(279, 6%, 55%);
        --very-dark-violet: hsl(278, 68%, 11%);
    }

    * {
        font-size: 18px;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Space Grotesk', sans-serif;
        font-weight: 500;
    }

    html, body {
        height: 100vh;
        width: 100vw;
        overflow: hidden;
        background-color: var(--white);
    }

    main {
        background-image: url(${backgroundImgDesktop});
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-position: 0 center;
        background-size: 32.5% 100%;
        height: 100%;
        width: 100%;
    }

    .cards {
        position: relative;
        height: 100%;
        max-width: 720px;
        width: 50%;
        float: left;
    }

    #card-front-img, .card-front-info {
        position: fixed;
        top: 50%;
        left:50%;
        transform: translate(-31rem, -14rem);
        width: 24.8rem;
        height: 13.6rem; 
        box-shadow: 0 30px 80px hsl(278, 68%, 11%, 0.2);
        border-radius: 0.5rem;
    }

    .card-front-info {
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        padding: 1.4rem; 
    }

    #info-logo {
        height: 2.2rem;
        width: 3.9rem;
        margin-bottom: 3.9rem;
    }

    #info-card-number, #info-card-name, #info-exp-date, #info-card-cvc {
        color: var(--white);
    }

    #info-card-number {
        width:100%;
        font-size: 1.5rem;
        letter-spacing: 4px;
        margin-bottom: 1rem;
    }

    #info-card-name {
    text-transform: uppercase;
    font-size: 0.8rem;
    letter-spacing: 2px;
    width: 85%;
    }

    #info-exp-date {
        width: 2.8rem;
        float: right;
        letter-spacing: 2px;
        font-size: 0.8rem;
    }

    #card-back-img , #info-card-cvc {
        position: fixed;
        top: 50%;
        left:50%;
        transform: translate(-25rem, 1.5rem);
        height: 13.6rem;
        width: 24.8rem;
        box-shadow: 0 30px 80px hsl(278, 68%, 11%, 0.2);
        border-radius: 0.5rem;
    }

    #info-card-cvc { 
        padding-top: 6.2rem;
        padding-left: 19.5rem;
        letter-spacing: 2px;
        font-size:0.8rem;  
    }

    .form-box {
        width: 50%;
        float: right;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        padding-left: 6rem;
    }

    .form {
        height: 23.3rem;
        width: 21.1rem;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }

    label {
        color: var(--very-dark-violet);
        margin-top: 0.9rem;
        text-transform: uppercase;
        letter-spacing: 2px;
        font-size: 0.66rem;
    }

    .form input {
        width: 100%;
        height: 2.5rem;
        font-size: 1rem;
        color: var(--very-dark-violet);
        cursor: pointer;
        padding-left: 0.9rem;
        border-radius: 0.5rem !important;
        border: 1px solid var(--light-grey);
        outline: none;
    }

    .form input::placeholder {
        opacity: 0.4;
    }

    .form input:focus {
        background: linear-gradient(white, white) padding-box,
        linear-gradient(90deg, hsl(249, 99%, 64%), hsl(278, 94%, 30%)) border-box;
        border-width: 1px; 
        border-style: solid;
        border-radius: 1rem;
        border-image-slice:2;
        border-color: transparent !important;
    }

    .text-error-undefined, .text-error-format {
        display: none;
        font-size: 0.66rem;
        color: var(--red);
    }

    .form div {
        display: grid;
        grid-template-columns: 1fr 1fr 2fr;
        grid-template-rows: 2.33rem 1fr 0.9rem;
        margin-bottom: 1rem;
    }

    label[for="exp-date"] {
        grid-area: 1 / 1 / 2 / 3;
    }

    #month {
        grid-area: 2 / 1 / 2 / 2;
    }

    #years {
        grid-area: 2 / 2 / 2 / 3;
    }

    #month, #years {
        width: 4.4rem;
    }

    #years {
        position: relative;
        left: -5px;
    }

    .text-error-exp-date {
        margin-top: 0.5rem;
        grid-area: 3 / 1 / 3 / 3;
    }

    .text-error-cvc {
        margin-top: 0.5rem;
        grid-area: 3 / 3 / 3 / 4;
    }

    #submit-form {
        background: var(--very-dark-violet);
        color: var(--white);
        height: 3rem;
        letter-spacing: 1px;
    }

    .confirm-form {
        height: auto;
        width: 21.1rem;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .confirm-form img {
        height: 4.4rem;
        width: 4.4rem;
        margin-bottom: 1.7rem;
    }

    .confirm-form h1 {
        font-size: 1.55rem;
        letter-spacing: 5px;
        text-transform: uppercase;
        margin-bottom: 0.55rem;
    }

    .confirm-form p {
        color: var(--dark-grey);
        margin-bottom: 1.94rem;
    }

    .confirm-form button {
        border-radius: 0.5rem;
        background: var(--very-dark-violet);
        color: var(--white);
        height: 3rem;
        width: 100%;
    }

    @media screen and (max-width: 1439px) {
        html, body {
            font-size: 15.5px;
        }
        
        main {
            background-size: 30% 100%;
        }
        
        #info-card-number {
            font-size: 1.35rem;
        }

        .form-box {
            padding-left: 5rem;
        }
        
        label {
            letter-spacing: 2px;
            font-size: 0.8rem;
        }
        
    }

    @media screen and (max-width: 980px) {
        html, body {
            font-size: calc(14px + 0.5vw);
            height: auto;
            overflow-y: auto;
        }

        main {
            background-image: url(${backgroundImgMobile});
            background-repeat: no-repeat;
            background-attachment: initial;
            background-size: 100% 15rem;
            background-position: top;
            position: relative;
            height: auto;
            width: 100%
        }
        
        .cards {
            position: relative;
            float: none;
            width: 100%;
            height: 20.66rem;
            max-width: none;
        }
        
        #card-front-img, .card-front-info {
            position: absolute;
            top: 8rem;
            left: 50%;
            transform: translate(-61%);
            width: 18.66rem;
            height: 10.33rem;
            z-index: 1;
            box-shadow: 0 30px 80px hsl(278, 68%, 11%, 0.2);
        }

        .card-front-info { 
            padding: 1rem;
        }

        #info-logo {
            height: 2rem;
            width: 3.5rem;
            margin-bottom: 2rem;
        }

        #info-card-number {
            font-size: 1rem;
            letter-spacing: 3px;
            margin-bottom: 0.85rem;
        }

        #info-card-name {
            font-size: 0.6rem;
            letter-spacing: 2px;
            width: 80%;
        }

        #info-exp-date {
            width: 2.66rem;
            letter-spacing: 2px;
            font-size: 0.6rem;
        }

        #card-back-img , #info-card-cvc {
            position: absolute;
            top: 2.13rem;
            left: 50%;
            transform: translate(-40%);
            width: 18.66rem;
            height: 10.33rem;
            z-index: 0;
            box-shadow: none;
        }

        #info-card-cvc { 
            padding-top: 4.66rem;
            padding-left: 14.86rem;
            letter-spacing: 2px;
            font-size: 0.66rem;
            z-index: 1;
        }

        .form-box {
            width: 100%;
            position: static;
            float: none;
            height: 26.66rem;
            align-items: flex-start;
            justify-content: center;
            padding-left: 0;
        }

        .form {
            height: auto;
            width: calc(88% + 5vw);
            max-width: 28rem;
        }

        label {
            letter-spacing: 2px;
            font-size: 0.8rem;
        }

        .form input {
            height: 2.86rem;
        }

        .text-error {
            font-size: 0.66rem;
        }

        .form div {
            grid-template-columns: 1fr 1fr 2fr;
            grid-template-rows: 2.26rem 1fr auto;
            column-gap: 0.6rem;
        }

        #month, #years {
            width:95%;
        }

        #submit-form {
            margin-top: 1.33rem;
            height: 3.33rem;
        }

        .confirm-form {
            height: auto;
            width: calc(88% + 5vw);
            max-width: 28rem;
            margin-top: 1.33rem;
        }

        .confirm-form img {
            height: 4.66rem;
            width: 4.66rem;
        }

        .confirm-form h1 {
            font-size: 1.66rem;
            letter-spacing: 4px;
        }

        .confirm-form p {
            font-size: 1.18rem;
        }

        .confirm-form button {
            border: none;
            height: 3.33rem;
            width: 100%;
        }

    }

    @media screen and (max-width: 375px) {
        html, body {
            font-size: 4.13vw;
        }

        #info-card-number {
            font-size: 1.05rem;
        }

        #info-card-cvc {
            font-size: 0.6rem;
        }

        .form {
            width:88%;
        }
        #years {
            width:100%;
        }
        #years {
            position: relative;
            left: -3px;
        }
    }

`;