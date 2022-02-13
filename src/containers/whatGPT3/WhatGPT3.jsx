import React from 'react';
import { Feature } from '../../components';
import './whatGPT3.css';

const WhatGPT3 = () => {
    return (
        <div className='pgg__whatpgg section__margin' id='wpgg'>
            <div className='pgg__whatpgg-feature'>
               <Feature  title='What is PGG' text="The People's Game Guild (PGG) started as a group of people who are passionate about the blockchain industry, in particular the GameFi space. Our core founding members hit it off upon the launch of a popular game on the Avalanche network called Crabada, where they found common affection for the game. The members instantly bonded and started to share their insights and pool together their resources, and from there, the little spark grew into a fire that kept on spreading to a large community."/>
            </div> 
            <div className='pgg__whatpgg-heading'>
                <h1 className='gradient__text'>The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.</h1>
                <p>All for one, One for all</p>
            </div>
            <div className='pgg__whatpgg-container'>
                <Feature title='Governance' text='PGG will be governed by the voting power of each guild member. Right from the start, each member consists of equally weight voting rights and is eligible to vote for each initiative and proposal. The core guild members will determine the direction of development, based on the feedback from the community.' />
                <Feature title='Operation' text='Inspired by original MMORPGs such as Everquest and World of Warcraft (WOW), PGG decided to adapt the Dragon Kill Points (DKP) system to keep the incentive alignment fair and square amongst guild members. Rewards are based on the participation and contribution of each member. ' />
                <Feature title='Team & Structure' text='The members of PGG are extremely diversified. Aside from having a significant passion for the blockchain industry, each member comes from a different educational background, such as IT, Finance, Asset Management, Gaming, and Blockchain development. ' />
            </div>
        </div>
    )
}

export default WhatGPT3
  