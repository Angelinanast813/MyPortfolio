import React, {Component} from "react";
import "../styles/AboutComponent.css";
import Data from "../data/aboutme.json";

class About extends Component {
    render() {
        const facts = Data.facts.map(fact => {
            if (fact.id % 2 === 1){
                return(
                    <div key={fact.id} className="d-flex justify-content-center about-container about-ht-100">
                        <div className="about-cont-div about-unused" />
                        <div className="about-line about-unused" />
                        <div className="about-cont-div d-flex align-items-center">
                            <div className="about-hor-line-cnt" />
                            <div className="about-txt-rt">{fact.content}</div>
                        </div>
                        <div className="about-line about-disp-none" />
                    </div>
                );
            } else {
                return (
                    <div key={fact.id} className="d-flex justify-content-center about-container about-ht-100">
                        <div className="about-cont-div d-flex align-items-center">
                            <div className="about-txt-lt">{fact.content}</div>
                            <div className="about-hor-line-cnt" />
                        </div>
                        <div className="about-line" />
                        <div className="about-cont-div about-unused" />
                    </div>
                );
            }

        });

        return(
            <div id="about" className="about">
                <div className="container d-flex flex-column about-mrg align-items-center">
                    <div className="d-flex flex-column align-items-center about-image-div">
                        <div className="about-image">
                            <img src="/images/angel2.png" alt="Angel" className="about-logo"/>
                        </div>
                        <div className="about-image-line" />
                    </div>
                    <div className="d-flex justify-content-center about-container">
                        <div className="about-cont-div d-flex align-items-center">
                            <div className="about-title">About me.</div>
                            <div className="about-hor-line" />
                        </div>
                        <div className="about-line" />
                        <div className="about-cont-div about-unused" />
                    </div>
                    {facts}
                    <div className="about-line about-line-bot flex-fill" />
                </div>
            </div>
        );
    }


}

export default About;