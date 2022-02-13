import React  from 'react';
import './navbar.css';
// import {RiMenu3Line, RiCloseLin} from 'react-icons/ri';
import  logo from '../../assets/pgg.png';
// import { useState } from 'react';
const Navbar = () => { 
    // const [toggleMenu, setToggleMenu] = useState(false);
    return (
        <div className='pgg__navbar'>
            <div className='pgg__navbar-links'>
                <div className='pgg__navbar-links_logo'>
                    <img src={logo} alt='logo' />
                </div>
            </div>
            <div className='pgg__navbar-links_container'>
                <p><a href='#home'>Home</a></p>
                <p><a href='#wpgg'>What is PGG?</a></p>
                {/* <p><a href='#possibility'>Open Gate</a></p> */}
                <p><a href='#possibility'>Scholarships</a></p>
                <p><a href='https://guildpgg.gitbook.io/pgg-whitepaper/'>Whitepaper</a></p>
            </div>
            
        </div> 
    )
}

export default Navbar
