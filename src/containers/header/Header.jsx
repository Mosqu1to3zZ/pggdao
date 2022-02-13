import React from 'react';
import './header.css';
import people from '../../assets/people.png';
import ai from '../../assets/11285.png';
const Header = () => {
    return (
        <div className = "pgg__header section__padding" id='home'>
            <div className = "pgg__header-content">
               <h1 className ='gradient__text'>Let's have something amazing with People's  Game Guild!</h1> 
               <p>PGG's mission is to facilitate the transition of Web2.0 users into the Web3.0 world, through the gateway of blockchain gaming. Our objective is to be the bridge that will connect users in diverse communities with various GameFi projects.</p>
               <div className="pgg__header-content__people">
                    <img src={ people } alt='people'/> 
                    <p>1,600+ people requested access a visit in last 24 hours</p>
                </div>
            </div>
            <div className="pgg__header-image">
                    <img src={ai} alt ='ai'/>
            </div>
        </div>
    )
}

export default Header
