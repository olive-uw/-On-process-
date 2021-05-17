import React from 'react';
import "./index.css"
import image from '../asset/gg.jpg'
const AboutComponent = () => {

    return (
        <div className="About-container">
            <h1><u>About</u></h1>


            <div className="row">
                <div className="column">
                    <p>Olive is a software developer who has skills in programing especially in back-end development.to make my career special I use defferent languages some of them are:java script ,node js and mongo db</p>

                    <img src={image} width="30%"/>
        </div>

                {/* column2*/}
                <div className="column">

                    <h2><u>A web designer and back end developer.</u> </h2>
                   
                </div>
                
            </div>

        </div>
    )
}
export default AboutComponent;
