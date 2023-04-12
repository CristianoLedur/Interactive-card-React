import React from 'react';

export default function Form({ onToggleTheme }) {
    /* text-error */
    let textErrorUndefined = document.getElementsByClassName('text-error-undefined');
    let textErrorFormat = document.getElementsByClassName('text-error-format');
    let textErrorDate = document.getElementsByClassName('text-error-date');

    /* text exp date */
    let contentExpDate = ['00', '/', '00'];

    /* creating the list in global scope */
    let listInputs;

    /* allowed letters */ 
    let validKeysNumbers = /^[0-9]+$/;
    let validKeysName = /^[a-zA-ZÀ-ÿ\s]+$/;

    /* inputs form */
    function getInputs() {
        let getNameCard = document.querySelector('#name');
        let getNumberCard = document.querySelector('#card-number');
        let getMonthCard = document.querySelector('#month');
        let getYearsCard = document.querySelector('#years');
        let getCvcCard = document.querySelector('#cvc');

        return [[getNameCard],[getNumberCard], [getMonthCard, getYearsCard], [getCvcCard]];
    };

    /* check form fields */
    function checkContent(item, validKeys, string = false) {
        let content = item.value;
        if(item.value.length === 0 ) {
            return "undefined";
        };
        const maxLength = item.getAttribute("maxlength");
        let newContent = content;
        let space = " ";
        if( !string && content.length != maxLength) {
            return "format";
        } else if(( string && content.length < 3) || ( string && content.indexOf(space) < 1 )) {
            return "format";
        } else if (maxLength === "19") {
            newContent = content.split(' ').join('');
        };
        for( let i = 0; i < newContent.length; i++ ) {
            let char = newContent.charAt(i);
            if(char.match( validKeys )) {
                continue;
            } else {
                return "format";
            };
        };
        return true;
    };

    /* check dates */
    function ckecksDate( month, year ) {
        let currentMonth = 4;
        let currentYear = 23;
        let status = false;
        if( month.length === 0 || year.length === 0 ) {
            listInputs[2][1].style.borderColor = "hsl(0, 100%, 66%)";
            textErrorUndefined[2].style.display = "block";
            status = true;
        } else {
            if( ( year < currentYear ) || ( year > (currentYear + 5) ) ) {
                listInputs[2][1].style.borderColor = "hsl(0, 100%, 66%)";
                textErrorFormat[2].style.display = "none";
                textErrorUndefined[2].style.display = "none";
                textErrorDate[0].style.display = "block";
                status = true;
            } else {
                listInputs[2][1].style.borderColor = "hsl(270, 3%, 87%)";
            }
            if (( month < 1 || month > 12 )) {
                listInputs[2][0].style.borderColor = "hsl(0, 100%, 66%)";
                textErrorFormat[2].style.display = "none";
                textErrorUndefined[2].style.display = "none";
                textErrorDate[0].style.display = "block";
                status = true;
            } else {
                listInputs[2][0].style.borderColor = "hsl(270, 3%, 87%)";
            }
            if ( year === currentYear && month < currentMonth ) {
                listInputs[2][0].style.borderColor = "hsl(0, 100%, 66%)";
                textErrorFormat[2].style.display = "none";
                textErrorUndefined[2].style.display = "none";
                textErrorDate[0].style.display = "block";
                status = true;
            };
        };
        return status;
    };

    /* write on the card */
    function writeCards( item, keys, space = false ) {
        let validKeys = keys;
        let content = item.value;
        if (space) {
            content = content.split(' ').join('');
        };
        let newContent = "";
        for( let i = 0; i < content.length; i++ ) {
            if(space) {
                if (i === 4 || i === 8 || i === 12) {
                    newContent += " ";
                };
            };
            let char = content.charAt(i);
            if( char.match(validKeys) ) {
                newContent += char;
            };
        };
        return newContent;
    };

    /* input name */
    function changeName(event) {
        let validKeys = /^[a-zA-ZÀ-ÿ\s]+$/;
        let newContent = writeCards(event.target, validKeys);
        document.getElementById("info-card-name").textContent = newContent;
        event.target.value = newContent;
    };
  
    /* input number */
    function changeNumber(event) {
        let validKeys = /^[0-9a-zA-Z\s]+$/;
        let newContent = writeCards(event.target, validKeys, true);
        document.getElementById("info-card-number").textContent = newContent;
        event.target.value = newContent;
    };

    /* input month */
    function changeMonth(event) {
        let validKeys = /^[0-9a-zA-Z\s]+$/;
        let newContent = writeCards(event.target, validKeys);
        contentExpDate.splice(0, 1, newContent);
        document.getElementById("info-exp-date").textContent = contentExpDate.join('');
        event.target.value = newContent;
    };

    /* input years */
    function changeYears(event) {
        let validKeys = /^[0-9a-zA-Z\s]+$/;
        let newContent = writeCards(event.target, validKeys);
        contentExpDate.splice(-1, 1, newContent);
        document.getElementById("info-exp-date").textContent = contentExpDate.join('');
        event.target.value = newContent;
    };

    /* input cvc */
    function changeCvc(event) {
        let validKeys = /^[0-9a-zA-Z\s]+$/;
        let newContent = writeCards(event.target, validKeys);
        document.getElementById("info-card-cvc").textContent = newContent;
        event.target.value = newContent;
    };
    
    /* input submit */
    function formSubmit(event) {
        event.preventDefault();
        listInputs = getInputs();
        let status = false;
        let month = parseInt(listInputs[2][0].value);
        let year = parseInt(listInputs[2][1].value);
        let statusDate = ckecksDate(month, year);
        if(!statusDate) {
            textErrorDate[0].style.display = "none";
        }
        for(let i = 0; i < listInputs.length; i++){
            let k = 0;
            for(let j = 0; j < listInputs[i].length; j++) {
                let statusInput;
                if(i === 0 ) {
                    statusInput = checkContent(listInputs[i][j], validKeysName, true);
                } else {
                    statusInput = checkContent(listInputs[i][j], validKeysNumbers);
                };
                if(statusInput === "format" ) {
                    listInputs[i][j].style.borderColor = "hsl(0, 100%, 66%)";
                    textErrorUndefined[i].style.display = "none";
                    textErrorFormat[i].style.display = "block";
                    status = true;
                    k++;
                } else if(statusInput === "undefined" ) {
                    textErrorFormat[i].style.display = "none";
                    textErrorUndefined[i].style.display = "block";
                    listInputs[i][j].style.borderColor = "hsl(0, 100%, 66%)";
                    status = true;
                    k++;
                } else if(i === 2 && statusDate) {
                    k++;
                } else {
                    listInputs[i][j].style.borderColor = "hsl(270, 3%, 87%)";
                };
            };
            if(k === 0) {
                textErrorUndefined[i].style.display = "none";
                textErrorFormat[i].style.display = "none";
                if(i === 2 ) {
                    textErrorDate[0].style.display = "none";
                };
            };
        };
        if(!status && !statusDate) {
            onToggleTheme();
        };
    };

    return (
        <form className='form' method='post' onSubmit={formSubmit}> 
            <label htmlFor="name">Cardholder Name</label>
            <input type="text" name="name" id="name" placeholder="e.g. Jane Appleseed" maxLength="25" 
            onInput={changeName}            
            />
            <span className="text-error-format">Full name</span>
            <span className="text-error-undefined">Can`t be blank</span>
            <label htmlFor="number">Card Number</label>
            <input type="text" name="number" id="card-number" placeholder="e.g. 1234 5678 9123 0000" maxLength="19" 
            onChange={changeNumber}
            />
            <span className="text-error-format">Wrong format, numbers only</span>
            <span className="text-error-undefined">Can`t be blank</span>
            <div>
                <label htmlFor="exp-date">Exp. Date (MM/YY)</label>
                <input type="text" name="month" id="month" placeholder="MM" maxLength="2" 
                onChange={changeMonth}
                />
                <input type="text" name="years" id="years" placeholder="YY" maxLength="2" 
                onChange={changeYears}
                />
                <span className="text-error-undefined text-error-exp-date">Can`t be blank</span>
                <span className="text-error-format text-error-exp-date">Wrong format, numbers only</span>
                <span className="text-error-date text-error-exp-date">Invalid date</span>
                <label htmlFor="cvc">CVC</label>
                <input type="text" name="cvc" id="cvc" placeholder="e.g. 123" maxLength="3" 
                onChange={changeCvc}
                />
                <span className="text-error-undefined text-error-cvc">Can`t be blank</span>
                <span className="text-error-format text-error-cvc">Wrong format, numbers only</span>
            </div>
        <input id="submit-form" type="submit" name="submit" value="Confirm" />
        </form>
    );
}