import React from 'react';
import './brand.css';
import {slack,atlassian,dropbox,shopify,crabadalogo,pgglogo,avalanchelogo} from './imports'
const Brand = () => {
    return (
        <div className='pgg__brand '>
            <div>
                <img src={crabadalogo}  alt='crabadalogo'></img>
            </div>
            <div className='pgg__brand-x'>
                <p className='gradient__text'>X</p>
            </div>
            <div className='pgg__logo'>
                <img src={pgglogo}  alt='pgglogo'></img>
            </div>
            <div className='pgg__brand-x'>
                <p className='gradient__text'>X</p>
            </div>
            <div>
                <img src={avalanchelogo}  alt='atlassian'></img>
            </div>
            
            
        </div>
    )
}

export default Brand;
