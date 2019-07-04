import React from 'react';
// import { Link } from 'react-router-dom';


function Nav() {
    return (
        <div id='nav'>
             {/* <Link to ="/">*/<h2>KegRoom</h2>/*</Link> */}
            <h4>About Us</h4>
            <h4>Locations</h4>
            {/* <Link to ="/employers">*/<h4>Our Beers</h4>/*</Link> */}
            <style jsx>{`
             #nav{
                display: flex;
                background-color: lightgrey;
                height: 50px;
            }
            h1{
                margin: 0px;
                padding: 21px;
            }

            #nav * {
                padding: 0px 15px;
            }
            
            `}</style>
        
        </div>
    );
}

export default Nav;