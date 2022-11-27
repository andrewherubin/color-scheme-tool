/*This is the search bar component 
 *In handleClick(), I need to figure out how to send that input to the results tab to be processed
 * 
 * */

import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';
import { useRef } from 'react';

export const SearchBar = (props) => {

    const inputRef = useRef(null);

    //this function needs additions
    async function handleClick(data) { // added async to allow await

        // DEV URL WILL NEED TO BE CHANGED
        const url = 'https://color-scheme-api-production.up.railway.app'

        const reqJSON = { url: inputRef.current.value}
        console.log(`sending POST request for ${reqJSON.url}`);
        /*
        ** fetch API allows for sending requests
        ** first param is URL to send request
        ** next param is object with various options
        */
       // POST target
        await fetch(url+'/site', {
            method: 'POST', // POST request
            mode: 'cors',
            headers: { 'Content-Type': 'application/json' }, // contains JSON
            body: JSON.stringify(reqJSON)
        }).then((res) => res.json()).then((resData) => { console.log(resData.message) })
        
        // GET analysis
        await fetch(url+'/scheme').then((res) => res.json()).then((resData) => {
            console.log(resData.colors)
            props.setColors(resData.colors)
        })
    }
    
    return (

        <div>

            <input
                ref={inputRef}
                type="text"
                id="message"
                name="message"
            />
        
            <button
                onClick={handleClick}    
            >
                Search
            </button>

            </div>

     

    );
};

/*
 * <Link to='/' className='btn-mobile'>
            <button
                className={`btn ${checkButtonStyle} ${checkButtonSize}`}
                onClick={onClick}
                type={type}
            >
                {children}
            </button>
        </Link>
        */

