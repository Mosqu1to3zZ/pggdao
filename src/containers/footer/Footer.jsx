import React from 'react';
import './footer.css';
import  logo  from '../../assets/pgg.png';
import  telegram  from '../../assets/icon-telegram.svg';
import  discord  from '../../assets/icon-frog.svg';
import  twitter  from '../../assets/icon-twitter.svg';

const Footer = () => {
    return (
        <div className='pgg__footer section__padding'>
            <div className='pgg__footer-heading'>
                <h1 className='gradient__text'>Do you want to step in to the future before OTHERS</h1>
            </div>
           
            <div className='pgg__footer-links'>
                <div className='pgg__footer-links_logo' >

                <a href='#home'><img src={logo} alt='logo'></img></a> 
                    {/* <p>Crechterwoord K12 182 DK Alknjkcb, <br /> All Rights Reserved</p> */}
                </div>
                <div className='pgg__footer-links_medium'>
                    <ul className='pgg__footer-links_social'>
                        <li>
                            <a href='https://t.me/PGGguild'>
                                <img src={telegram} alt='telegram'></img>
                            </a>
                        </li>
                        <li>
                            <a href='https://discord.gg/dBJcFJknQA'>
                                <img src={discord} alt='discord'></img>
                            </a>
                        </li>
                        <li>
                            <a href='https://twitter.com/PGGguild?s=20'>
                                <img src={twitter} alt='twitter'></img>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='pgg__footer-copyright'>
                <p>Copyright © 2022 PGG. All rights reserved</p>
            </div>
        </div>
    )
}

export default Footer
