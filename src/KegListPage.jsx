import React from 'react';
import Keg from './Keg';
import {beersInfo} from './beers-data';

function KegList () {
    return(
        <div id="keg-list">
            <h1>Our beers</h1>
            <hr/>
            {beersInfo.map((beer, index) =>
                <Keg 
                name = {beer.name}
                type = {beer.type}
                description = {beer.description}
                ABV = {beer.ABV}
                price = {beer.price}
                volume = {beer.volume}
                />    
            )}
        </div>
    );
}

export default KegList;