import React from 'react';
import './possibility.css';
import PossibilityImage from '../../assets/crabada.jpeg';
const Possibility = () => {
    return (
        <div className='pgg__possibility section__padding' id='possibility'>
            <div className='pgg__possibility-image'>
            <a href='https://play.crabada.com'> <img src={PossibilityImage} alt='possibility' /></a>
            </div>
            <div className='pgg__possibility-content'>
                {/* <h4>Request Early Access to Get Started</h4> */}
                {/* <h1 className='gradient__text'>The possibility of Crabada are beyond your imagination</h1> */}
                {/* <p>Crabada is an Undersea world filled with fierce fighting Hermit-Crabs called Crabada. Crabada is a Fully Decentralized Play-and-Earn Idle Game.Crabada can be bred, and used in games to earn cryptocurrencies with real value.</p> */}
                <p>Play-to-earn is a new business model where real money can be earned by playing video games that are centred upon cryptocurrency-based assets, known as non-fungible tokens (NFTs).<br/>The scholarship is a popular pathway to onboard newcomers to NFT games. The PGG guild securely loans out gaming assets in the form of non-fungible tokens (NFTs) to community members. These NFTs allow members to participate in P2E crypto games, like Crabada.<br/>Members earn crypto tokens through playing, which they can exchange into local currency. In return for lending the NFTs, PGG guild receives a percentage of tokens earned.</p>
                {/* <h4>Request Early Access to Get Started</h4> */}
            </div>
        </div>
    )
}

export default Possibility
