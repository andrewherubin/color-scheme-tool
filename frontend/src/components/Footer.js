import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
    return (

        <div className='footer-container'>
            <section className='footer-subscription'>
                <p className='footer-subscription-heading'>
                    Check out our website on GitHub, or contact us!
                </p>
                
            </section>
            <div class='footer-links'>
                <div className='footer-link-wrapper'>
                    <div class='footer-link-items'>
                        
                        <a target="_blank"
                            href="https://github.com/andrewherubin/color-scheme-tool">GitHub</a>
                    
                    </div>
                    <div class='footer-link-items'>
                        <Link to='/support'>Support</Link>
                    </div>
                </div>
              
            </div>
            
        </div>
    );
}

export default Footer;
