import React from 'react';
import Keg from './Keg';
import {beersInfo} from './beers-data';

function KegList () {
    return(
        <div id="keg-list">
            <h1>Our beers</h1>
            <div id="kegs-container">
            {beersInfo.map((beer, index) =>
                <Keg className='keg'
                name = {beer.name}
                type = {beer.type}
                description = {beer.description}
                ABV = {beer.ABV}
                price = {beer.price}
                volume = {beer.volume}
                key= {index}
                />    
            )}
            </div>
            <style jsx>{`
                #kegs-container{
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: center;
                }

                .keg{
                    margin: 80px;
                }

            `}</style>
        </div>
    );
}

export default KegList;