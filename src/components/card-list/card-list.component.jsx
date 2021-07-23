import React from 'react';

import { Card } from '../card/card-component';


import './card-list.styles.css'

export const CardList = props => (

    <div className="card-list">
        {
            props.monsters.map(monster => (
                // <h1 key={monster.id}>{monster.name}</h1>
                <Card key={monster.id} monster={monster}></Card>
            ))
        }
    </div>
);