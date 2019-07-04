import React from 'react';
import Background from './assests/AboutBackground.jpg';


function AboutPage() {
    const aboutStyle = {
        height: 'calc(100vh - 50px)',
        backgroundImage: `url(${Background})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: ' center',
    }
    return (
        <div id='about' style={aboutStyle}>
            <div id="about-text-container">
                <h1>About Us</h1>
                <h4>At Bad Martha, we believe in three things: great beer, getting bad and doing good. Every sip of our premium craft beer is a reminder that there’s a paradise out there where you can kick off your boat shoes, let your hair down and leave it all behind. That paradise is Martha’s Vineyard. Don’t hold back. Don’t bring your off-island worries. Don’t be too good. Drink it all in.</h4>

                <h4>And while there’s a bit of bad in every drop of beer we brew, there’s also a whole lot of good that comes with every bottle we sell. That’s because Bad Martha is built on a simple idea – community first. We bring this idea to life by donating the first portion of profits to a local hunger relief charity. What’s left goes back into brewing more delicious Bad Martha.</h4>

                <h4>We’re proud of our beer. We’re even prouder of the island that inspired it. We hope you enjoy both as much as we do.</h4>

            </div>
            <style jsx>{`
                #about-text-container{
                    color: black;
                    width: 70%;
                    min-width: 400px;
                    margin: 0px auto;
                    text-align: left;
                    padding-top: 25px;
                }

                #about-text-container h1 {
                    padding-left: 0px;
                }

            `}</style>
        </div>
    );
}

export default AboutPage;