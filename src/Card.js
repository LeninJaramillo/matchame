import React from 'react';
import './Board.css';
const back = './backcard.jpg';

export default function Card({face, clicker, status}){
    let card;     
        if(status === 'up'){
            card = <img className='sizecards' src={face} id='c1' onClick={() => clicker()}/>


        } else {
            card = <img className='sizecards' src={back} id='back' onClick={() => clicker()}/>
        }
    return(
        <>{card}</>
    )
}