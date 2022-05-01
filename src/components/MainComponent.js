import React from "react";
import "../styles/MainComponent.css";

const Main = () => {
    return(
        <div id="main" className="d-flex vh-100 main flex-column">
            <div className="bg-wheat">
                <div className="container">
                    <div className="d-flex align-items-center header">
                        <a href="#main" className="image">
                            <img src="/images/angel2.png" alt="Angel" className="logo"/>
                        </a>
                        <div className="navs d-flex justify-content-end align-items-center">
                            <a href="#about" className="menu-item">About me</a>
                            <a href="#gallery" className="menu-item">My sketches</a>
                            <a href="#contact" className="menu-item">Contact me</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="d-flex align-items-center content flex-fill justify-content-center">
                <div className="brush" />
                <div className="d-flex flex-column bd show-n flex-fill">
                    <div className="name">I'm Angelina.</div>
                    <div className="pos">A sketch painter.</div>
                </div>
                <div className="pencil" />
            </div>
            <div className=" container journal d-flex align-items-center justify-content-center">
                <div>
                    <img src="/images/sketchbook3.png" alt="Angel" className="sketchs"/>
                </div>
            </div>
        </div>
    );
}

export default Main;