import React from 'react';
import SplashBanner from './SplashBanner';
import Background from './assests/SplashBackground.jpg';

function SplashPage() {
    const splashStyle = {
        height: 'calc(100vh - 50px)',
        backgroundImage: `url(${Background})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: ' center',
    }
    return (
        <div id='splash' style={splashStyle}>
            <div id="splash-text-container">
                <h1>WELCOME TO BAD MARTHA</h1>
                <h4>Dance with a stranger. Give out your real number. Convince someone that's your yacht moored outside the harbor.</h4>

                <h4>A trip to Martha's Vineyard is a chance to escape. To let go. To be, dare we say, a little bad. That indulgent spirit lives and breathes in every drop of Bad Martha beer. So grab a bottle and get bad today.</h4>

                <button>See our beers</button>
            </div>
            <style jsx>{`
                #splash-text-container{
                    color: white;
                    width: 40%;
                    min-width: 250px;
                    margin: 0px auto;
                    text-align: left;
                }

                #splash-text-container h1 {
                    padding-left: 0px;
                }

            `}</style>
        </div>
    );
}

export default SplashPage;