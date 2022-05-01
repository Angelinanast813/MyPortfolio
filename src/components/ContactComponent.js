import React, {Component} from "react";
import "../styles/ContactComponent.css";

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeLogo: ""
        }
        this.activateLogo = this.activateLogo.bind(this);
    }

    activateLogo(event) {
        this.setState({activeLogo: event.target.id});
        const logos = document.getElementsByClassName("contact-item");

        for (let i = 0; i < logos.length; i++) {
            let isActive = false;
            const classes = logos[i].classList;
            for (let j = 0; j < classes.length; j++) {
                if (classes[j] === event.target.id){
                    isActive = true;
                }
            }

            if (isActive){
                logos[i].classList.toggle("contact-item-active");
            }else {
                logos[i].classList.toggle("contact-item-na");
            }
        }
    }

    deactivateLogo() {
        const logos = document.getElementsByClassName("contact-item");

        for (let i = 0; i < logos.length; i++) {
            logos[i].classList.remove("contact-item-active");
            logos[i].classList.remove("contact-item-na");
        }
    }

    render() {
        return(
            <div id="contact" className="vh-100 contact-bg">
                <div className="d-flex flex-column container contact-mrg align-items-center">
                    <div className="contact-main-line" />
                    <div className="d-flex justify-content-center about-container">
                        <div className="about-cont-div" />
                        <div className="about-line" />
                        <div className="about-cont-div d-flex align-items-center">
                            <div className="contact-hor-line contact-unused" />
                            <div className="contact-ttl">Contact me.</div>
                        </div>
                    </div>
                    <div className="contact-lower-line" />
                    <div className="d-flex flex-fill justify-content-between align-items-stretch contact-logos">
                        <a href="https://t.me/anilnast"
                           target="_blank"
                           rel="noopener noreferrer"
                           id="telegram"
                           className="contact-item telegram"
                           onMouseOver={event => this.activateLogo(event)}
                           onMouseOut={this.deactivateLogo}>
                        </a>
                        <a href="https://instagram.com/angelinanast813?igshid=1tg7zmguguqp3"
                           target="_blank"
                           rel="noopener noreferrer"
                           id="inst"
                           className="contact-item inst"
                           onMouseOver={event => this.activateLogo(event)}
                           onMouseOut={this.deactivateLogo}>
                        </a>

                        <a href="https://www.facebook.com/angelina.nastenko/"
                             target="_blank"
                             rel="noopener noreferrer"
                             id="facebook" className="contact-item facebook"
                             onMouseOver={event => this.activateLogo(event)}
                             onMouseOut={this.deactivateLogo}>

                        </a>
                        <a href="mailto:angelinanastenko8@gmail.com"
                           id="email" className="contact-item email"
                           onMouseOver={event => this.activateLogo(event)}
                           onMouseOut={this.deactivateLogo}>
                        </a>
                    </div>
                </div>
            </div>
        );
    }


}

export default Contact;