import React from "react";
import "../styles/FooterComponent.css";

const Footer = () => {
    return(
        <div className="footer">
            <div className="container footer-main d-flex flex-column justify-content-around">
                <div className="d-flex justify-content-around">
                    <a href="https://t.me/anilnast"
                       target="_blank"
                       rel="noopener noreferrer"
                       className="footer-btn">Telegram</a>
                    <a href="https://www.facebook.com/angelina.nastenko/"
                       target="_blank"
                       rel="noopener noreferrer"
                       className="footer-btn">Facebook</a>
                    <a href="mailto:angelinanastenko8@gmail.com" className="footer-btn">Hire me</a>
                </div>
                <div className="footer-rts">&copy; 2020 <a href="#" className="footer-me">Angelina Nastenko</a>. All rights reserved.</div>
            </div>
        </div>
    );
}

export default Footer;