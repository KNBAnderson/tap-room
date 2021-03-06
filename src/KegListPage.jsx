import React from 'react';
import Keg from './Keg';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { v4 } from 'uuid';


function KegList (props) {
    return(
        <div id="keg-list">
            <h1>Our beers</h1>
            {props.isAdminActive ? <Link to="/newkeg"><button>Add a new keg to the list</button></Link>: <br/>}
            
            <div id="kegs-container">
            {props.masterKegList.map((beer, index) =>
                <div key={v4()}>
                <Keg className='keg'
                name = {beer.name}
                type = {beer.type}
                description = {beer.description}
                ABV = {beer.ABV}
                price = {beer.price}
                volume = {beer.volume}
                isAdminActive={props.isAdminActive}
                />    
                </div>
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

KegList.propTypes = {
    onAddingNewKeg: PropTypes.func,
    isAdminActive: PropTypes.bool,
    masterKegList: PropTypes.array
}

export default KegList;