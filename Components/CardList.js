import React, { Component } from 'react'
import Card from './Card'

function CardList(props) {
    return (
        <div>
                {props.cards.map(c => 
                    <Card key={c.id} src={c.src} />)}
            </div>
    );
}

export default CardList;
